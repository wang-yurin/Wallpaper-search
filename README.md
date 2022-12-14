# ๐ ๋ฐฐ๊ฒฝํ๋ฉด ๊ฒ์ ์์ง

### pixabay Open API๋ฅผ ์ด์ฉํ ๋ฐฐ๊ฒฝํ๋ฉด ๊ฒ์ ์๋น์ค์๋๋ค.

<br>

## โ๏ธ ๊ธฐ์  ์คํ

- React
- Styled-components

<br>

## โ ๊ธฐ๋ฅ ๊ตฌํ

### pixabay API ์ฐ๋ํ๊ธฐ

- pixabay์์ ์ ๊ณตํ๋ ์ด๋ฏธ์ง ์กฐํ API๋ฅผ ์ฐ๋ํ์ฌ ํ๋ฉด ๋ ๋๋ง
- ๊ฐ์ธ API key๊ฐ ๋ธ์ถ๋์ง ์๋๋ก .env์ ๋ณ๋๋ก ์์ฑ
- fetch API ์ฌ์ฉ

> request URL ์์

```
https://pixabay.com/api/?key={ ๊ฐ์ธ API Key }&q=yellow+flowers&image_type=photo
```

<br>
<br>

# ๐ ๋ฉ๋ชจ

## ๋น๋๊ธฐ ์์ฒญ(ajax) ๋ผ์ด๋ธ๋ฌ๋ฆฌ

### fetch API? axios?

<a href="https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/">์ฐธ๊ณ </a>

|                   |                   fetch                    |   axios   |
| :---------------: | :----------------------------------------: | :-------: |
|  ์ค์น ํ์ ์ฌ๋ถ   | ๋๋ถ๋ถ์ ๋ชจ๋ ๋ธ๋ผ์ฐ์ ์ ๋ด์ฅ, ์ค์น ๋ถํ์ | ์ค์น ํ์ |
|  ์์ฒญ ์ทจ์ ๊ธฐ๋ฅ   |                     X                      |     O     |
| ์์ฒญ timeout ๊ธฐ๋ฅ |                     X                      |     O     |
|  ๋ธ๋ผ์ฐ์  ํธํ์ฑ  |         ์ผ๋ถ ๋ชจ๋ ๋ธ๋ผ์ฐ์ ๋ง ์ง์          |   ์ฐ์    |
| JSON ๋ฐ์ดํฐ ๋ณํ  |          .json() ๋ฉ์๋ ํธ์ถ ํ์          |   ์๋    |

### ๊ธฐํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

- ์ํ ๊ด๋ฆฌ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก Redux๋ฅผ ์ฌ์ฉํ๋ค๋ฉด? redux-saga, redux-thunk
- React ํจ์ํ ์ปดํฌ๋ํธ๋ฅผ ์ฌ์ฉํ๊ณ , ์๊ฒฉ์์ fetch ํด์ค๋ ์๋ฒ ์ํ๊ฐ ๋ง๋ค๋ฉด? swr, react-query๋ก ์๋ฒ ์ํ ๊ด๋ฆฌํ๊ธฐ

<br>

## useState?

๋ฆฌ์กํธ ํจํค์ง์์ `useState` ํจ์๋ฅผ ๋ถ๋ฌ์จ๋ค.

```js
import React, { useState } from 'react';
```

`useState`๋ฅผ ์ฌ์ฉํ  ๋์๋ ์ํ์ ๊ธฐ๋ณธ๊ฐ์ ํ๋ผ๋ฏธํฐ๋ก ๋ฃ์ด์ ํธ์ถํด์ค๋ค. ํจ์๋ฅผ ํธ์ถํ๋ฉด ๋ฐฐ์ด์ด ๋ฐํ๋๋ค. `[ํ์ฌ ์ํ, Setter ํจ์]`
Setter ํจ์๋ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌ ๋ฐ์ ๊ฐ์ ์ต์  ์ํ๋ก ์ค์ ํด์ค๋ค.

<br>

## React์์ SVG ์ฌ์ฉํ๊ธฐ

### ์ปดํฌ๋ํธ๋ก ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ

```js
import { ReactComponent as ์ปดํฌ๋ํธ๋ช } from 'svg ๊ฒฝ๋ก';

<์ปดํฌ๋ํธ๋ช />;
```

<br>

## htmlFor?

React์ JSX๋ class์ for๋ฅผ ์ ์ธํ๋ฉด ํ์ค HTML ์์ฑ์ ๋ชจ๋ ์ฌ์ฉํ  ์ ์๋ค.  
class์ for๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ECMAScript์ ์์ฝ์ด๊ณ , JSX๋ ์ผ๋ฐ ์๋ฐ์คํฌ๋ฆฝํธ๋ก ๋ณํํด์ ์ฌ์ฉํ๋ค. ๋ฐ๋ผ์ class์ for ๋์ ์ ๊ฐ๊ฐ className๊ณผ htmlFor๋ฅผ ์ฌ์ฉํ๋ค.  
ํผ ์์๋ฅผ ์ํ label ์์๋ฅผ ์์ฑํ๋ ๊ฒฝ์ฐ, for ๋์ ์ htmlFor๋ฅผ ์ฌ์ฉํ๋ค.  
<a href="https://thebook.io/006961/part01/ch03/04/04/">์ฐธ๊ณ </a>

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

## ๋ฐฐ๊ฒฝํ๋ฉด ๊ฒ์ ๊ธฐ๋ฅ

### URL์ ๊ตฌ์กฐ

<a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL">What is a URL?</a>

<h3>?key1=value1&key2=value2</h3>
โช Parameters

- ๊ฒ์ ํค์๋๋ก URL encoded ํํ์ฌ์ผ ํ๋ค.
  <a href='https://developer.mozilla.org/ko/docs/Web/API/URLSearchParams'>URLSearchParams</a>

URLSearchParams ๊ฐ์ฒด๋ฅผ ์ด์ฉํ๋ค.
์ฟผ๋ฆฌ ํ๋ผ๋ฏธํฐ๋ฅผ ์กฐ์ํ  ์ ์๋ ๋ค์ํ ๋ฉ์๋๋ค์ด ์กด์ฌํ๋ค.

```js
const params = new URLSearchParams({ foo: '1', bar: '2' });
params.toString(); // 'foo=1&bar=2'

const params2 = new URLSearchParams({ foo: '1', q: '์ค์?*^^*' });
params2.toString(); // 'foo=1&q=%EC%98%A4%EC%9E%89%3F*%5E%5E*'

// ์ญ์ 
params2.delete('foo');
params2.toString(); // 'q=%EC%98%A4%EC%9E%89%3F*%5E%5E*'

// ์ถ๊ฐ
params2.append('foo', '์ถ๊ฐํ์!');
params2.toString(); // 'q=%EC%98%A4%EC%9E%89%3F*%5E%5E*&foo=%EC%B6%94%EA%B0%80%ED%95%98%EC%9E%90%21'
```

<br>

# ๊ตฌํ ์ ๊ณ ๋ฏผ

- Header ์ปดํฌ๋ํธ ๋์ค๊ฐ ๊น์ด์ก๋๋ฐ ์ค์ฌ์ผํ ๊น?
- fetch API๋ ์๋ต ๋ฐ์ดํฐ๋ฅผ ๋ฝ์์ค๊ธฐ ์ํด์ request ํจ์๊ฐ ๋ฐ๋ณต ๋  ์ ์๊ธฐ ๋๋ฌธ์ ๋ณ๋์ ํ์ผ๋ก ๊ด๋ฆฌ

### Github, Discord webhook ์ฐ๋
