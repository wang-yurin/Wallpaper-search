# 🔎 배경화면 검색 엔진

### pixabay Open API를 이용한 배경화면 검색 서비스입니다.

<br>

## ⚒️ 기술 스택

- React
- Styled-components

<br>

## ✅ 기능 구현

### pixabay API 연동하기

- pixabay에서 제공하는 이미지 조회 API를 연동하여 화면 렌더링
- 개인 API key가 노출되지 않도록 .env에 별도로 작성
- fetch API 사용

> request URL 예시

```
https://pixabay.com/api/?key={ 개인 API Key }&q=yellow+flowers&image_type=photo
```

<br>
<br>

# 📝 메모

## 비동기 요청(ajax) 라이브러리

### fetch API? axios?

<a href="https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/">참고</a>

|                   |                   fetch                    |   axios   |
| :---------------: | :----------------------------------------: | :-------: |
|  설치 필요 여부   | 대부분의 모던 브라우저에 내장, 설치 불필요 | 설치 필요 |
|  요청 취소 기능   |                     X                      |     O     |
| 요청 timeout 기능 |                     X                      |     O     |
|  브라우저 호환성  |         일부 모던 브라우저만 지원          |   우수    |
| JSON 데이터 변환  |          .json() 메소드 호출 필요          |   자동    |

### 기타 라이브러리

- 상태 관리 라이브러리로 Redux를 사용한다면? redux-saga, redux-thunk
- React 함수형 컴포넌트를 사용하고, 원격에서 fetch 해오는 서버 상태가 많다면? swr, react-query로 서버 상태 관리하기

<br>

## useState?

리액트 패키지에서 `useState` 함수를 불러온다.

```js
import React, { useState } from "react";
```

`useState`를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 함수를 호출하면 배열이 반환된다. `[현재 상태, Setter 함수]`
Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해준다.

<br>

## React에서 SVG 사용하기

### 컴포넌트로 사용하는 방법

```js
import { ReactComponent as 컴포넌트명 } from "svg 경로";

<컴포넌트명 />;
```

<br>

## htmlFor?

React와 JSX는 class와 for를 제외하면 표준 HTML 속성을 모두 사용할 수 있다.  
class와 for는 자바스크립트와 ECMAScript의 예약어고, JSX는 일반 자바스크립트로 변환해서 사용한다. 따라서 class와 for 대신에 각각 className과 htmlFor를 사용한다.  
폼 요소를 위한 label 요소를 생성하는 경우, for 대신에 htmlFor를 사용한다.  
<a href="https://thebook.io/006961/part01/ch03/04/04/">참고</a>

```jsx
// Error
// DOM property `for`. Did you mean `htmlFor`?
<label for=""></label>
```

```jsx
// OK
<label htmlFor=""></label>
```

<br>

## 배경화면 검색 기능

### URL의 구조

<a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL">What is a URL?</a>

<h3>?key1=value1&key2=value2</h3>
↪ Parameters

- 검색 키워드로 URL encoded 형태여야 한다.
  <a href='https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams'>URLSearchParams</a>

URLSearchParams 객체를 이용한다.
쿼리 파라미터를 조작할 수 있는 다양한 메서드들이 존재한다.

```js
const params = new URLSearchParams({ foo: "1", bar: "2" });
params.toString(); // 'foo=1&bar=2'

const params2 = new URLSearchParams({ foo: "1", q: "오잉?*^^*" });
params2.toString(); // 'foo=1&q=%EC%98%A4%EC%9E%89%3F*%5E%5E*'

// 삭제
params2.delete("foo");
params2.toString(); // 'q=%EC%98%A4%EC%9E%89%3F*%5E%5E*'

// 추가
params2.append("foo", "추가하자!");
params2.toString(); // 'q=%EC%98%A4%EC%9E%89%3F*%5E%5E*&foo=%EC%B6%94%EA%B0%80%ED%95%98%EC%9E%90%21'
```

<br>

# 구현 시 고민

- Header 컴포넌트 뎁스가 깊어졌는데 줄여야할까?
- fetch API는 응답 데이터를 뽑아오기 위해서 request 함수가 반복 될 수 있기 때문에 별도의 파일로 관리
