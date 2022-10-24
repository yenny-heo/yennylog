---
title: "CSS 방법론 (OOCSS, BEM, SMACSS)"
date: "2022-05-23"
tags: ["CSS"]
type: "TECH"
description: "각 CSS 방법론의 방식 및 장단점을 알아보자"
---

### 1. OOCSS (Object Oriented CSS)

중복을 최소화, 캡슐화를 원칙으로 하는 방식

1. 구조와 외형 분리
   - 구조: width, height, border, padding, margin ...
   - 외형: color, border-color, font-color, background-color ...

```css
<div
  class="btn common-skin tel"
  > tel</div
  > <div
  class="btn common-skin email"
  > email</div
  > .btn {
}
.common-skin {
}
```

1. 컨테이너와 내용 분리
   - 위치에 의존하지 않는 스타일 정의
   - 어떤 태그라도 동일한 외형 제공
   - 어디서나 재사용이 가능한 클래스 기반 구축

```css
// Bad
h3 {
  font-size: 16px;
}
// Good
.sub-title {
  font-size: 16px;
}
```

- 장점:
  - 공통된 부분 정의해서 재사용 가능 ⇒ 코드 양 줄어듦
  - 동일한 클래스라면 동일한 스타일 기대 가능
- 단점:
  - 공통된 클래스가 많아, 수정이 필요할 시 멀티클래스 사용해야함.
  - 멀티클래스가 많아짐에 따라 유지보수 어려움
  - 가독성 떨어짐

### 2. BEM (Block Element Modifier)

Block, Element, Modifier로 나누어서 클래스명을 기술하는 방법

- `block__element—modifier`
- ID에는 사용할 수 없고 오직 클래스명에만 사용할 수 있음.
- Selector만으로도 어디에 어떻게 사용되는지 유추 가능하도록 작성

1. Block: 재사용 가능한 영역, 하나의 단어를 사용하되 길어질 경우 하이픈(-) 사용

```css
.header {
  ...;
}
.block {
  ...;
}
```

1. Element: 블록의 내부 구성을 표현, 두 개의 언더스코어(\_\_)로 표기

```css
.header {
  ...;
}
.header__link {
  ...;
}
.header__tap {
  ...;
}
.header__tap__item {
  ...;
}
```

1. Modifier: 요소의 상태를 표현, 두 개의 하이픈(—)으로 표기

```css
.header--hide {
  ...;
}
.header__tap--big {
  ...;
}
.header__tap--big {
  ...;
}
```

- 장점:
  - 직관적인 클래스 명으로 구조파악 쉬움
- 단점:
  - 클래스명이 길어질 수 밖에 없어 코드가 길어지고 복잡해짐

### 3. SMACSS (Scalable Modular Architecture CSS)

범주화로 패턴화 하고자 하는 방법론

기본(base), 레이아웃(layout), 모듈(module), 상태(state), 테마(theme)

다섯가지의 범주 제시

1. base ⇒ 스타일 초기화 (reset.css)

```css
body,
p,
table,
form,
fieldset,
legend,
input,
button ... {
  margin: 0;
  padding: 0;
}
```

1. layout ⇒ 주요 요소(id), 하위 요소(class)로 구분하고 접두사를 사용
   1. 주요 컴포넌트: header, footer, aside, container 등
   2. 하위 컴포넌트: list, item, form 등

```css
// 주요 요소 ()
#header {
  width: 400px;
}
#aside {
  width: 30px;
}
// 하위 요소 (layout => l-)
.l-width #header {
  width: 600px;
  padding: 10px;
}
.l-width #aside {
  width: 100px;
}
```

1. module ⇒ 재사용 가능한 구성요소: 버튼, 배너, 아이콘 등

```css
.stick {
  ...;
}
.stick-name {
  ...;
}
.stick-number {
  ...;
}
```

1. state ⇒ 요소의 상태변화를 표현하고 접두사를 사용

```css
.is-error {
  ...;
}
.is-hidden {
  ...;
}
.is-disabled {
  ...;
}
```

1. theme ⇒ 사용자가 선택 가능하도록 스타일을 재선언하여 사용

```css
// base.css
.header {
  background-color: green;
}
// theme.css
.header {
  background-color: red;
}
```

- 장점:
  - 클래스명을 통한 예측의 용이성
  - 재사용을 통한 코드의 간결화
  - 확장의 용이성
- 단점:
  - 카테고리를 나누는 기준이 불분명해질 수 있음
  - 코드를 나눠서 작성해야 해서 CSS 사용하기 번거로움
