---
title: "[React] Gatsby에서 Recoil 사용하기"
date: "2022-10-16"
tags: ["React", "Gatsby"]
type: "TECH"
description: "상태관리도구 Recoil"
---

# 설치

우선 [Recoil](https://recoiljs.org/ko/docs/introduction/getting-started/)을 설치한다.

```html
$ npm install recoil
```

# 전역 Wrapping

Recoil을 사용하려면, 최상위 엘리먼트를 `RecoilRoot` 로 감싸주어야 한다.

그런데 Gatsby에서는 React와는 다르게 최상위 루트 컴포넌트인 `index.js` 파일이 없다.

Gatsby 문서에 따르면 `gatsby-browser.js` 파일을 사용하면, **추가 구성 요소로 래핑**할 수 있다고 나와있다.

모든 페이지들을 래핑하려면, `wrapPageElement` 함수가 필요하다. 이 함수는 **페이지가 변경되어도 언마운트 되지 않는다**.

```jsx
//gatsby-browser.js
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { RecoilRoot } from "recoil";

export const wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
```

# 상태관리

래핑해주었다면, 이제 Recoil을 사용할 수 있다!

나는 간단하게 탭의 상태를 전역적으로 관리하고 싶었기에, Recoil의 `selector` 는 사용하지 않았다.

```jsx
// state/index.js
import { atom } from "recoil";

const tabState = atom({
  key: "tabState",
  default: "TECH",
});

export { tabState };
```

컴포넌트단에서는 `useRecoilState` 와 정의해 둔 state를 통해 값을 가져오고, 변경시킬 수 있다.

useState와 사용법이 똑같다.

```jsx
// hooks/tabs.hooks.js
import { useRecoilState } from "recoil";
import { tabState } from "@/state";
const TabsHooks = ({}) => {
  const [tab, setTab] = useRecoilState(tabState);
  // ...
};
```

# SSR

공식문서에 다음과 같이 나와있다.

> `wrapPageElement` 함수는 Server-Side Rendering(SSR) API에도 존재한다.
> SSR을 통해 생성된 페이지가 브라우저에서 Hydrate 된 이후에도 동일하도록,
> 일반적으로 `gatsby-ssr.js` 과 `gatsby-browser.js` 에 동일한 구성요소를 구현해야만 한다.

즉, 서버 사이드 렌더링을 통해 생성된 HTML과, 클라이언트 사이드에서 이 HTML과 번들링 된 JS를 매칭시킬 때 (**Hydrate**) 두 요소가 동일해야 하기 때문에 동일한 코드를 작성해주라는 말인 것 같다.

```jsx
//gatsby-ssr.js
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import { RecoilRoot } from "recoil";

export const wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>;
};
```

# 참조

- [https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- [https://medium.com/swlh/how-to-use-recoil-js-library-in-gatsby-d5212f2cd623](https://medium.com/swlh/how-to-use-recoil-js-library-in-gatsby-d5212f2cd623)
