---
title: "Google CSS 스타일 가이드라인"
date: "2022-03-31"
tags: ["CSS"]
type: "TECH"
description: "Google 가이드라인 번역"
---

> [Google CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS)을 번역한 글입니다.

## 1) CSS Style Rules

1. **CSS 유효성**: 유효한 CSS를 사용한다. (W3C CSS 유효성 검사기 같은 도구로 테스트)
2. **클래스 이름**: 클래스 이름은 최대한 구체적이고, 요소의 목적을 반영할 수 있도록 짓는다.

```scss
/* 권장하지 않음: 의미가 없음 */
.yee-1901 {
}

/* 권장하지 않음: presentational */
.button-green {
}
.clear {
}

/* 권장함: 구체적임 */
.gallery {
}
.login {
}
.video {
}

/* 권장함: 일반적임 */
.aux {
}
.alt {
}
```

3. **클래스 이름 스타일**: 클래스 이름은 가능한 짧게, 필요하다면 길게 짓는다.

```scss
/* 권장하지 않음 */
.navigation {
}
.atr {
}

/* 권장함 */
.nav {
}
.author {
}
```

4. **클래스 이름 구분자**: 클래스 이름은 하이픈(-)으로 구분한다. (kebab-case)

```scss
/* 권장하지 않음: “demo” 와 “image”가 구분되어있지 않음. */
.demoimage {
}

/* 권장하지 않음: 하이픈 대신 언더스코어 사용함 */
.error_status {
}

/* 권장함 */
.video-id {
}
.ads-sample {
}
```

5. **접두사**: 대규모 프로젝트나 다른 프로젝트에 임베드된 코드는 클래스 이름에 네임스페이스 처럼 접두사를 사용한다. 대쉬(-)로 구분되는 짧고, 고유한 식별자를 사용한다. 네임스페이스를 사용하는 것은 네이밍 충돌을 막고, 유지보수를 용이하게한다.

```scss
.adw-help {
} /* AdWords */
.maia-note {
} /* Maia */
```

6. **CSS 선택자 단순화**: 타입 선택자로 클래스 이름을 한정하지 말자. 필요한 경우가 아니라면, 요소 이름을 클래스와 함께 사용하지 않는 것이 좋다. 불필요한 조상 선택자를 피하는 것은 [성능상의 이유](https://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)로 유용하다.

```scss
/* 권장하지 않음 */
ul.example {
}
div.error {
}

/* 권장함 */
.example {
}
.error {
}
```

7. **ID 선택자**: ID 선택자는 피하자. ID 속성은 전체 페이지에서 고유해야 하는데, 많은 개발자들에 의해 구현된 많은 컴포넌트를 포함하는 페이지에서 보장되기가 어렵다. 클래스 선택자가 모든 상황에서 선호되어야만 한다.

```scss
/* 권장하지 않음 */
#example {
}

/* 권장함 */
.example {
}
```

8. **단축 속성**: 가능한 한 단축 속성을 사용한다. CSS는 다양한 단축속성 (예: `font`)을 제공하는데, 약식 속성을 사용하면 코드 효율성과 이해도에 유용하다.

```scss
/* 권장하지 않음 */
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

/* 권장함 */
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;
```

9. **0과 단위**: 필요하지 않다면, ‘0’ 값 이후 단위를 생략한다.

```scss
flex: 0px; /* 이 플렉스 기반 요소에는 단위가 필요함. */
flex: 1 1 0px; /* 단위 없이 모호하지는 않으나, IE11에서는 필요함. */
margin: 0;
padding: 0;
```

10. **선행 0**: 값이나 길이가 -1~1 사이인 경우, 앞에 0을 선행한다.

```scss
font-size: 0.8em;
```

11. 16진수 표기법: 가능하면 3자리의 16진수 표기법을 사용한다. 더 짧고 간결하기 때문이다.

```scss
/* 권장하지 않음 */
color: #eebbcc;

/* 권장함 */
color: #ebc;
```

12. \***\*중요 선언\*\***: `!important` 선언을 사용하지 않는다. 이러한 선언은 css의 자연스러운 종속을 깨고 스타일을 추론하고 구성하기 어렵게 한다. 대신 [특정 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)를 사용하여 오버라이딩 한다.

```scss
/* 권장하지 않음 */
.example {
  font-weight: bold !important;
}
/* 권장함 */
.example {
  font-weight: bold;
}
```

13. **Hacks**: 사용자 에이전트 브라우저 감지와 CSS Hacks을 사용하지 않는다.

## 2) CSS Formating Rules

1. **선언 순서**: 알파벳 순으로 지정한다. CSS 벤더 접두사(예: -webkit0-)가 붙은 경우에는 정렬을 위해 이를 무시한다. 그러나 여러 CSS 벤더 접두사가 있다면 정렬된 상태로 유지해야 한다. (-moz는 -webkit 앞에 옴)

```css
background: fuchsia;
border: 1px solid;
-moz-border-radius: 4px;
-webkit-border-radius: 4px;
border-radius: 4px;
color: black;
text-align: center;
text-indent: 2em;
```

2. **블록 컨텐츠 들여쓰기**: 모든 블록 컨텐츠를 들여쓴다. 이는 계층구조를 반영하고 이해도를 향상시킨다.

```css
@media screen, projection {
  html {
    background: #fff;
    color: #444;
  }
}
```

3. **선언 중지**: 모든 선언 뒤에 세미콜론을 사용한다.

```css
/* 권장하지 않음 */
.test {
  display: block;
  height: 100px;
}

/* 권장함 */
.test {
  display: block;
  height: 100px;
}
```

4. **속성 이름 중지**: 모든 속성 이름의 콜론(:) 뒤에 공백을 사용한다.

```css
/* 권장하지 않음 */
h3 {
  font-weight: bold;
}

/* 권장함 */
h3 {
  font-weight: bold;
}
```

5. **선언 블록 분리**: 항상 마지막 선택자와 선언 블록이 시작하는 열린 중괄호 사이에는 하나의 공백을 사용한다. 열린 중괄호는 마지막 선택자와 같은 줄에 있어야 한다.

```css
/* 권장하지 않음: 공백 없음 */
.video {
  margin-top: 1em;
}

/* 권장하지 않음: 불필요한 줄바꿈 */
.video {
  margin-top: 1em;
}

/* 권장함 */
.video {
  margin-top: 1em;
}
```

6. **선택자와 선언블록 분리**: 선택자들과 선언들을 새로운 라인으로 분리한다. 항상 각각의 선택자와 선언은 새로운 라인에서 시작한다.

```css
/* 권장하지 않음 */
a:focus,
a:active {
  position: relative;
  top: 1px;
}

/* 권장함 */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```

7. **규칙 분리**: 모든 규칙을 새로운 라인으로 분리한다. 규칙 사이에는 하나의 빈 라인(두 번의 줄바꿈)을 추가한다.

```css
html {
  background: #fff;
}

body {
  margin: auto;
  width: 50%;
}
```

8. **CSS 따옴표**: 속성 선택자 및 속성에 작은 따옴표('') 대신 큰 따옴표("")를 사용한다. URI 값에는 따옴표를 사용하지 않는다. (url()) 예외: 만약 @charset 규칙을 사용해야 한다면, 큰따옴표를 사용한다. [작은 따옴표는 허용되지 않는다.](https://www.w3.org/TR/CSS21/syndata.html#charset)

```css
/* 권장하지 않음 */
@import url("https://www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

/* 권장함 */
@import url(https://www.google.com/css/maia.css);

html {
  font-family: "open sans", arial, sans-serif;
}
```
