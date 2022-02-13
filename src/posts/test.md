---
title: "Electron App과 C++ 게임 클라이언트 간의 통신이 가능할까?"
date: "2022-02-09"
tags: ["electron", "c++", "TCP"]
description: "TCP/IP 프로토콜로 통신하는 방법"
---

C++ 게임 클라이언트 ↔ Electron App 간의 통신을 시나리오로 잡았다.

게임 클라이언트와 일렉트론 앱이 어떤 방식으로 통신을 할지는 아직 명확하지가 않아서 우선은 ‘양방향’에 초점을 맞추고 서로 데이터를 주고 받을 수 있는지에 대해 확인을 해보았다.

## TCP/IP Socket

통신을 하는 방법은 TCP/IP 소켓 프로그래밍을 이용해보기로 했다.

Server 소켓과 Client 소켓을 만들고, 같은 IP 주소, port를 통해 두 소켓을 연결하여 통신하는 방식이다.

이때 서버와 클라이언트는 유일한 IP주소와 port 조합을 가져야 한다.

## Electron - Server

일렉트론은 `node` 기반이기 때문에, `node`의 `net` 모듈로 서버를 열어보기로 했다.

7777번 host에 서버를 열었다. 서버는 클라이언트로부터 데이터를 받고, 그 데이터를 그대로 보내준다.

```jsx
var server = net.createServer(function (client) {
    client.setEncoding("utf8");
    client.setTimeout(500);
    client.on("data", function (data) {
      for (var i = 0; i < sockets.length; i++) {
        sockets[i].write(`Hi, I'm server and received "${data}"`);
      }
    });
    client.on("error", function () {
      console.log("error");
    });
    client.on("close", function () {
      sockets.pop();
      console.log("client close");
    });
    client.on("timeout", function () {});
    sockets.push(client);
  });

  server.on("error", function (error) {});
  server.listen(7777, function () {
    var serverInfo = server.address();
    var serverInfoJson = JSON.stringify(serverInfo);
    console.log("listen server : " + serverInfoJson);
    server.on("close", function () {
      console.log("server closed.");
    });
    server.on("connection", function () {
      console.log("connected!!!");
    });
  });
});
```

## C++ - Client

C++에서는 소켓 프로그래밍을 위한 헤더 winsock2.h를 추가하여 클라이언트를 생성하였다.

IP: 127.0.0.1, port: 7777로 소켓을 연결하여 메시지를 입력해서 서버에 전송하고, 서버로부터 데이터를 받아 출력해준다.

```jsx
#define _WINSOCK_DEPRECATED_NO_WARNINGS
#include<iostream>
#include<string>
#include<winsock2.h>

using namespace std;
void ShowErrorMessage(string message)
{
	cout << "[오류발생]: " << message << '\n';
	system("pause");
	exit(1);
}

int main()
{
	WSADATA wsaData;
	SOCKET clientSocket;
	SOCKADDR_IN serverAddress;
	int serverPort = 7777;
	char received[256];
	string sent;
	if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) // Initialize Winsock
		ShowErrorMessage("WSAStartup()");
	clientSocket = socket(PF_INET, SOCK_STREAM, 0); // Create TCP Client Socket
	if (clientSocket == INVALID_SOCKET)
		ShowErrorMessage("socket()");
	memset(&serverAddress, 0, sizeof(serverAddress));
	serverAddress.sin_family = AF_INET;
	serverAddress.sin_addr.s_addr = inet_addr("127.0.0.1");
	serverAddress.sin_port = htons(serverPort);

	if (connect(clientSocket, (SOCKADDR*)&serverAddress, sizeof(serverAddress)) == SOCKET_ERROR)
		ShowErrorMessage("connect()");
	cout << "[현재상태] connect()\n";
	while (1) { // Send and receive message from server repeatedly
		cout << "[메시지전송]: ";
		getline(cin, sent);
		if (sent == "") continue;
		send(clientSocket, sent.c_str(), sent.length(), 0);
		int length = recv(clientSocket, received, sizeof(received), 0);
		received[length] = '\0';
		if (strcmp(received, "[exit]") == 0) {
			cout << "[서버종료]\n";
			break;
		}
		cout << "[서버메시지]: " << received << '\n';
	}
	closesocket(clientSocket);
	WSACleanup();
	system("pause");
	return 0;
}
```

## 연결하기

이제 준비는 다 되었다. Server를 먼저 열고, 그다음 Client를 열어 연결해주면 된다.

Electron App의 모습 (Server)

C++ 콘솔창의 모습 (Client)

성공적으로 연결된 것을 확인할 수 있었다. 그렇다면 데이터를 주고 받아보자.

양방향 통신 또한 아주 잘 되는 모습이었다.

결론은, **Electron 앱과 C++ 게임 클라이언트는 TCP/IP 소켓 통신을 통해 데이터를 주고받을 수 있다.**

**+**

찾아본 결과 gRPC (google Remote Procedure Cell) 로도 통신이 가능하다고 합니다.

## 참조

[https://ryeom2.tistory.com/117](https://ryeom2.tistory.com/117)

[https://stackoverflow.com/questions/41674063/is-it-possible-to-create-a-tcp-client-with-electron](https://stackoverflow.com/questions/41674063/is-it-possible-to-create-a-tcp-client-with-electron)
