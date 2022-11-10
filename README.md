# 🔎 배경화면 검색 엔진

### pixabay Open API를 이용한 배경화면 검색 서비스입니다.

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
