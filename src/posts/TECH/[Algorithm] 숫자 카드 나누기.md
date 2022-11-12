---
title: "[Algorithm] 숫자 카드 나누기"
date: "2022-11-12"
tags: ["JavaScript", "Algorithm"]
type: "TECH"
description: "Programmers lv2"
---

# 문제 설명

철수와 영희는 선생님으로부터 숫자가 하나씩 적힌 카드들을 절반씩 나눠서 가진 후, 다음 두 조건 중 하나를 만족하는 가장 큰 양의 정수 a의 값을 구하려고 합니다.

철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
예를 들어, 카드들에 10, 5, 20, 17이 적혀 있는 경우에 대해 생각해 봅시다. 만약, 철수가 [10, 17]이 적힌 카드를 갖고, 영희가 [5, 20]이 적힌 카드를 갖는다면 두 조건 중 하나를 만족하는 양의 정수 a는 존재하지 않습니다. 하지만, 철수가 [10, 20]이 적힌 카드를 갖고, 영희가 [5, 17]이 적힌 카드를 갖는다면, 철수가 가진 카드들의 숫자는 모두 10으로 나눌 수 있고, 영희가 가진 카드들의 숫자는 모두 10으로 나눌 수 없습니다. 따라서 철수와 영희는 각각 [10, 20]이 적힌 카드, [5, 17]이 적힌 카드로 나눠 가졌다면 조건에 해당하는 양의 정수 a는 10이 됩니다.

철수가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 arrayA와 영희가 가진 카드에 적힌 숫자들을 나타내는 정수 배열 arrayB가 주어졌을 때, 주어진 조건을 만족하는 가장 큰 양의 정수 a를 return하도록 solution 함수를 완성해 주세요. 만약, 조건을 만족하는 a가 없다면, 0을 return 해 주세요.

# 접근 방식

한쪽 배열에서는 모두 나눠지고, 한쪽 배열에서는 모두 나눠지지 않는 수 중 가장 큰 수를 찾는 문제이다.

반복문을 최소한으로 돌기 위해서는, 배열에서 가장 작은 수의 약수를 추출해서 해당 약수에서 정답을 찾으면 된다고 생각했다.

Sorting을 통해 가장 작은 수를 찾고, 그 가장 작은 수의 약수를 큰 순서대로 구하였다.

그리고 반복문을 통해 조건에 맞는 수를 찾아주었다.

# 코드

```javascript
function solution(arrayA, arrayB) {
  let answer = 0;
  let answerA = 0,
    answerB = 0;

  const sortedArrayA = arrayA.sort((a, b) => a - b);
  const sortedArrayB = arrayB.sort((a, b) => a - b);

  const minA = sortedArrayA[0];
  const minB = sortedArrayB[0];

  // A에서 모든 수가 나눠지고, B에서는 모든 수를 나눌 수 없는 수 찾기
  // minA의 약수 찾기
  const divisorA = [];
  for (let i = minA; i > 1; i--) {
    if (minA % i === 0) {
      divisorA.push(i);
    }
  }

  for (let i = 0; i < divisorA.length; i++) {
    let isNotADivisor = false,
      isBDivisor = false;
    // 약수가 A에서 모두 나눠지는지 확인하기
    for (let j = 0; j < sortedArrayA.length; j++) {
      if (sortedArrayA[j] % divisorA[i] !== 0) {
        isNotADivisor = true;
        break;
      }
    }
    // A에서 나눠지지 않았다면 다른 수 찾기
    if (isNotADivisor) continue;
    // 약수가 A에서 모두 나눠지지 않는지 확인하기
    for (let j = 0; j < sortedArrayB.length; j++) {
      if (sortedArrayB[j] % divisorA[i] === 0) {
        isBDivisor = true;
        break;
      }
    }
    // A에서 나눠졌다면 다른 수 찾기
    if (isBDivisor) continue;

    if (!isNotADivisor && !isBDivisor) {
      answerA = divisorA[i];
      break;
    }
  }

  // B에서 모든 수가 나눠지고, A에서는 모든 수를 나눌 수 없는 수 찾기
  // minB의 약수 찾기
  const divisorB = [];
  for (let i = minB; i > 1; i--) {
    if (minB % i === 0) {
      divisorB.push(i);
    }
  }
  for (let i = 0; i < divisorB.length; i++) {
    let isADivisor = false,
      isNotBDivisor = false;
    // 약수가 A에서 모두 나눠지지 않는지 확인하기
    for (let j = 0; j < sortedArrayA.length; j++) {
      if (sortedArrayA[j] % divisorB[i] === 0) {
        isADivisor = true;
        break;
      }
    }
    // A에서 나눠졌다면 다른 수 찾기
    if (isADivisor) continue;
    // 약수가 B에서 모두 나눠지는지 확인하기
    for (let j = 0; j < sortedArrayB.length; j++) {
      if (sortedArrayB[j] % divisorB[i] !== 0) {
        isNotBDivisor = true;
        break;
      }
    }
    // A에서 나눠졌다면 다른 수 찾기
    if (isNotBDivisor) continue;

    if (!isADivisor && !isNotBDivisor) {
      answerB = divisorB[i];
      break;
    }
  }

  return Math.max(answerA, answerB);
}
```

# 문제 링크

https://school.programmers.co.kr/learn/courses/30/lessons/135807
