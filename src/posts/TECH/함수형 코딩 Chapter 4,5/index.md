---
title: "[함수형 코딩] Chapter 4, 5"
date: "2023-04-17"
tags: ["Functional Programming"]
type: "TECH"
description: "함수에 존재하는 암묵적 입출력"
---

# MegaMart.com

- 장바구니의 금액합계 보여주기
- 합계 20달러 이상 무료배송 아이콘 추가
- 물건 세금 보여주기

## 기존 코드

```jsx
/********** 장바구니 금액 합계 보여주기 ************/
// 장바구니 제품과 금액 합계를 담고 있는 전역변수
var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  // cart 배열에 제품을 추가
  shopping_cart.push({
    name,
    price,
  });
  // 장바구니 제품이 바뀌었으므로 금액 업데이트
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = 0;
  shopping_cart.forEach((item) => {
    // 모든 제품값 더하기
    shopping_cart_total += item.price;
  });
  // 금액 합계를 반영하기 위해 DOM 업데이트
  set_cart_total_dom();
  // 무료 배송비 아이콘 여부 계산
  update_shipping_icons();
  // 세금 계산
  update_tax_dom();
}

/********** 무료 배송비 계산하기 ************/
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  // 페이지의 모든 구매 버튼을 가져와 반복문 실행
  buy_buttons.forEach((button) => {
    var item = button.item;
    // 무료 배송이 가능한지 확인 => 무배 아이콘 노출/비노출
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

/********** 세금 계산하기 ************/
function update_tax_dom() {
  // 세금 합계 DOM 업데이트
  set_tax_dom(shopping_cart_total * 1.0);
}
```

## 문제점: 위 코드에는 계산, 데이터가 없고 모든 코드가 액션이다.

- 변경이 가능한 전역변수 정의
- DOM에서 읽어오는 것
- DOM을 바꾸는 것
- 전역변수를 바꾸는 것
- 함수에 암묵적 입출력이 존재 ⇒ 인자, 리턴값 외 다른 입출력이 존재하면 안됨.
  - 전역변수를 읽는 것: 압묵적 입력
  - 전역변수를 바꾸는 것: 압묵적 출력

# 테스트와 재사용성

- 테스트가 쉽도록 코드를 짜기
  - DOM 업데이트와 비즈니스 규칙을 분리
  - 전역변수가 없어야 함
- 재사용성 있게 코드를 짜기
  - 전역변수에 의존하지 않아야 한다.
  - DOM을 사용할 수 있는 곳에서 실행된다고 가정하면 안된다.
  - 함수가 결괏값을 리턴해야 한다.

# 코드 변경하기

기존 코드

```jsx
function calc_cart_total() {
  shopping_cart_total = 0;
  // 1) 액션에 존재하는 계산
  shopping_cart.forEach((item) => {
    // 2) 압묵적 입력 (전역변수 READ)
    shopping_cart_total += item.price; // 3) 압묵적 출력 (전역변수 UPDATE)
  });
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

변경한 코드

```jsx
function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// 1) 액션에서 계산 분리하기
function calc_total(cart) {
  var total = 0;
  cart.forEach((item) => {
    // 2) 압묵적 입력 제거
    total += item.price; // 3) 압묵적 출력 제거
  });
  return total;
}
```

기존 코드

```jsx
function add_item_to_cart(name, price) {
  // 1) 액션에 존재하는 계산
  // 2) 압묵적 입력 (전역변수 READ)
  // 3) 압묵적 출력 (전역변수 UPDATE)
  shopping_cart.push({
    name,
    price,
  });
  calc_cart_total();
}
```

변경한 코드

```jsx
function add_item_to_cart(name, price) {
  add_item(shopping_cart, name, price);
  shopping_cart.push({
    name,
    price,
  });
  calc_cart_total();
}

// 1) 액션에서 계산 분리하기
function add_item(cart, name, price) {
  // 2) 압묵적 입력 제거
  var new_cart = [...cart];
  // 3) 압묵적 출력 제거
  new_cart.push({
    name,
    price,
  });
  return new_cart;
}
```

기존 코드

```jsx
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    var item = button.item;
    // 1) 액션에 존재하는 계산
    // 2) 압묵적 입력 (전역변수 READ)
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 1.0);
}
```

변경한 코드

```jsx
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    var item = button.item;
    if (gets_free_shipping(item.price, shopping_cart_total))
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

// 1) 액션에서 계산 분리하기
function gets_free_shipping(item_price, total) {
  // 2) 압묵적 입력 제거
  return item_price + total >= 20;
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 1.0);
}
```

## 변경한 코드의 문제점

- gets_free_shipping()
  - 인자: 장바구니가 아닌, 제품의 합계와 가격으로 무료배송을 확인하고 있음.
  - 중복: calc_total() 함수와 장바구니 합계를 계산하는 코드가 중복됨.

변경 전

```jsx
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    var item = button.item;
    if (gets_free_shipping(item.price, shopping_cart_total))
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

function gets_free_shipping(item_price, total) {
  return item_price + total >= 20;
}
```

변경 후

```jsx
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    var item = button.item;
    var new_cart = add_item(shopping_cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

function gets_free_shipping(cart) {
  // 장바구니를 인자로 받음
  return calc_total(cart) >= 20; // 중복되는 부분을 함수로 뺌
}
```

- 압묵적 입력과 출력
  - 인자가 아닌 모든 입력
  - 리턴값이 아닌 모든 출력

변경 전

```jsx
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    var item = button.item;
    // 전역변수 참조 => 압묵적 입력
    var new_cart = add_item(shopping_cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

변경 후

```jsx
function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  buy_buttons.forEach((button) => {
    var item = button.item;
    // 전역변수를 인자로 대체
    var new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  });
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons(shopping_cart);
  update_tax_dom();
}
```

## 원칙: 설계는 엉켜있는 코드를 푸는 것.

1. 재사용하기 쉽다
   1. 함수는 작으면 작을수록 재사용하기 쉽다.
2. 유지보수하기 쉽다
   1. 작은 함수는 쉽게 이해할 수 있고 유지보수하기 쉽다.
3. 테스트하기 쉽다
   1. 작은 함수는 한 가지 일만 하기 때문에 테스트하기 좋다.

## add_item() 분리하기

### 1. add_item()에서 item 만드는 부분 빼기

- cart와 item을 독립적으로 확장할 수 있음
  - ex) cart의 자료구조가 바뀌어도 변경할 부분이 적음

```tsx
function add_item(cart, name, price) {
  var new_cart = [...cart];
  new_cart.push({
    name,
    price,
  });
  return new_cart;
}

add_item(shopping_cart, "shoes", 3.45);
```

```jsx
function make_cart_item(name, price) {
  return { name, price };
}

function add_item(cart, item) {
  var new_cart = [...cart];
  new_cart.push(item);
  return new_cart;
}

add_item(shopping_cart, make_cart_item("shoes", 3.45));
```

### 2. Copy-On-Write 패턴 빼내기

카피-온-라이트란?

- 값을 바꿀 때, 복사하는 것

```jsx
function add_item(cart, item) {
  var new_cart = [...cart]; // Copy on write
  new_cart.push(item);
  return new_cart;
}
```

```jsx
// Copy-On-Write 함수
// 어떤 배열, 항복에도 쓸 수 있는 일반적인 이름
function add_element_last(array, elem) {
  var new_array = [...cart];
  new_array.push(elem);
  return new_array;
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}
```

## 결론

- 암묵적 입출력을 인자와 리턴값으로 바꾸자
- 풀려있는 코드는 언제든 합칠 수 있으므로, 엉켜있는 코드를 풀자
- 각 함수가 하나의 일만 하도록 하면 개념을 중심으로 쉽게 구성할 수 있다.
