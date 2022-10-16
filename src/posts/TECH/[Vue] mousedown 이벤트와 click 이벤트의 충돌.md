---
title: "[Vue] mousedown 이벤트와 click 이벤트의 충돌"
date: "2022-02-21"
tags: ["Vue"]
type: "TECH"
description: "Vue.js에서의 Event 발생 순서"
---

# 문제 발생

Vue를 웹뷰로 포팅해서 보여주는 프로젝트를 진행중이다.

헤더는 `mousedown` 이벤트에 창을 이동할 수 있는 핸들러(`moveWindow`)가 있었고, 헤더 안의 버튼에는 창을 닫는 `click`이벤트가 달려있었다.

그런데 창 닫기 버튼을 클릭해도 `click` 이벤트가 트리거되지 않았다.

당연히 자식 이벤트인 `click`, 부모 이벤트인 `mousedown` 이벤트가 차례대로 호출될 줄 알았지만 `mousedown`이벤트만 발생되었다.

```jsx
<div class="gameHeader" @mousedown="moveWindow">
    <div class="toolbar">
      <button
        type="button"
        @click="minimizeWindow"
        @keydown.prevent
        class="btMin"
      >
...
```

# 원인

이벤트가 발생되는 순서는 `mousedown` => `mouseup` => `click` 순서대로 실행된다.

따라서 `mousedown`이 먼저 실행된 것은 순서가 맞다.

`click`이 실행되지 않은 이유는, `mousedown`이벤트에 `drag` 핸들러가 붙어있기 때문이었다.

`drag` 이벤트가 트리거되는 조건은

1. mouse movement

2. mouse up

`click` 이벤트가 트리거되는 조건은

1. no mouse movement

2. mouse up

버튼이 눌러진(`mousedown`) 시점에서 이 동작이 `click`인지, `drag`인지 알 수 없기 때문에,

`mousedown` => `drag` 이벤트만 실행 된 것이다.

# 해결 방법

click 이벤트를 가지는 자식 컴포넌트에 `data-event="click"` 속성을 주었고,

`moveWindow` 이벤트가 트리거 됐을 때 `data-event`가 `click`인 경우에는 `drag`를 실행하지 않도록 `return` 해주었다.

## 참조

[https://qdmana.com/2021/08/20210802141021395W.html](https://qdmana.com/2021/08/20210802141021395W.html)
