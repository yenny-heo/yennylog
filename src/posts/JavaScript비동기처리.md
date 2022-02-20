---
title: "JavaScript 비동기 처리"
date: "2022-02-20"
tags: ["JavaScript", "Async"]
description: "for await ... of의 정확한 사용법은 무엇일까"
---

# 잘못된 정보

> 문제: for await ... of는 반복문 내에서 일어나는 모든 비동기 구문을 기다려주는 구문이다 ?

검색을 해보면 위와 같이 설명하는 글이 매우매우 많지만, 대부분 **잘못된 정보**이다.

for await ... of는 비동기 구문을 기다려주는게 아니라, 단순히 **비동기 열거**를 위해 사용하는 구문이다.

(출처: [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for-await...of](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for-await...of))

다음과 같이 Promise 객체를 반환하는 함수가 있다고 할 때,

```jsx
const getPromisedObject = id => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ message: "success", id }), 2000);
  });
};
```

비동기 루프문을 위해 아래와 같이 코드를 작성하는 것은 올바르지 않다.

```jsx
const getPromisedObjects = async () => {
  const resArray = [];
  for await (let id of [1, 2, 3]) {
    const res = await getPromisedObject(id);
    resArray.push(res);
  }
  console.log(resArray);
};
```

# 비동기 처리 방법

## 비동기 작업 순차처리

> for, for ... of 를 사용

**for**문과 **for ... of** 문 내부에서 await 구문을 사용하기만 하더라도 비동기 처리가 순차적으로 이루어진다.

```jsx
const getPromisedObjects = async () => {
  const resArray = [];
  for (let id of [1, 2, 3]) {
    const res = await getPromisedObject(id);
    resArray.push(res);
  }
  console.log(resArray);
};
```

## 비동기 작업 병렬처리

> Promise.all 를 사용

순서가 중요하지 않은 비동기 작업의 병렬 처리를 하고 싶다면 **Promise.all**을 사용하면 된다.

순차처리에서는 2초 \* 3 = 6초가 걸렸지만, 병렬처리로는 2초 뒤 작업이 끝난다.

```jsx
const getPromisedObjects = async () => {
  const promises = [1, 2, 3].map(id => getPromisedObject(id));
  const resArray = await Promise.all(promises);
  console.log(resArray);
};
```

## for await ... of는 언제 사용할까?

> for await (variable of iterable) {
> statement
> }

비동기 열거형 처리를 위해 사용한다. *iterable*에 비동기 열거형이 들어가지 않는다면 사용할 필요가 없다.

```jsx
const getPromisedObjects = async () => {
  const resArray = [];
  const promises = [1, 2, 3].map(id => getPromisedObject(id));
  for await (let res of promises) {
    resArray.push(res);
  }
  console.log(resArray);
};
```
