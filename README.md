# 🔎 배경화면 검색 엔진

### pixabay Open API를 이용한 배경화면 검색 서비스입니다.

<br>

## 기술 스택

- React
- Styled-components

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

## useState?

리액트 패키지에서 `useState` 함수를 불러온다.

```js
import React, { useState } from "react";
```

`useState`를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 함수를 호출하면 배열이 반환된다. `[현재 상태, Setter 함수]`
Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해준다.

## React에서 SVG 사용하기

### 컴포넌트로 사용하는 방법

```js
import { ReactComponent as 컴포넌트명 } from "svg 경로";

<컴포넌트명 />;
```

<br>
<br>

# 구현 시 고민

- Header 컴포넌트 뎁스가 깊어졌는데 줄여야할까?
