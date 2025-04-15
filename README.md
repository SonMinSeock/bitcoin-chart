# 💰 Bitcoin Price Tracker

> 실시간 암호화폐 시세와 라인 차트를 보여주는 React 기반 웹 앱  
> 📈 KRW / USD 기준 시세 전환, 실시간 데이터 시각화, 스타일 카스팅 진행

---

## 📌 주요 기능

### ✅ 1. 비트코인 시세 정보 조회

- Coinpaprika API를 통해 비트코인 실시간 데이터 가져오기
- `KRW`, `USD` 기준 선택 가능
- 선택된 통화에 따라 시세와 차트 자동 갱신

### ✅ 2. 코인 상세 페이지

- 코인 이름, 심볼, 통화별 시세 정보 제공
- 최근 24시간 변동률, 시가총액, ATH 정보도 추가 가능

### ✅ 3. 가격 변화 라인 차트

- ReactApexChart를 활용해 가격 변화량을 시각화
- 통화 선택에 따라 차트 자동 업데이트

### ✅ 4. 스타일링

- SCSS 기반 모듈 스타일링
- 푸른 계열 테마 사용
- 선택된 버튼은 색상으로 명확히 구분

---

## 💠 기술 스택

| 기술           | 설명                             |
| -------------- | -------------------------------- |
| React + Vite   | 빠른 개발 환경 구성              |
| TypeScript     | 정적 타입 검사를 통한 안정성     |
| TanStack Query | 데이터 fetching 및 캐시드 최적화 |
| ReactApexChart | 시세 차트 시각화                 |
| SCSS Modules   | 컨포넌트 단위 스타일 관리        |

---

## 파업 구조

```
src
 ┣ components
 ┃ ┗ Chart.tsx              # 비트코인 가격 차트를 렌더링하는 컴포넌트
 ┣ hooks
 ┃ ┗ useBitcoinPriceQuery.ts # 비트코인 가격 데이터를 가져오는 커스텀 훅
 ┣ pages
 ┃ ┣ CoinDetail.tsx         # 비트코인 상세 정보를 보여주는 페이지
 ┃ ┗ Home.tsx               # 비트코인 목록을 보여주는 홈 페이지
 ┣ services
 ┃ ┗ coinApi.ts             # CoinPaprika API와의 통신을 처리하는 서비스 파일
 ┣ styles
 ┃ ┣ base
 ┃ ┃ ┗ _reset.scss          # 기본 스타일 초기화 파일
 ┃ ┣ pages
 ┃ ┃ ┣ CoinDetail.scss      # CoinDetail 페이지 스타일
 ┃ ┃ ┗ Home.scss            # Home 페이지 스타일
 ┃ ┗ index.scss             # 글로벌 스타일
 ┣ App.tsx                   # 애플리케이션의 주요 컴포넌트
 ┗ index.tsx                 # 애플리케이션의 엔트리 포인트
```

---

## ⌛ 캐시 차트

- `staleTime: 60 * 1000` (1분) 설정으로 데이터 캐시드
- 로딩 중 상태 처리 및 에러 핸딩 구현

---

## 📅 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 빌드
npm run build
```

---

## 📌 API 출처

- [Coinpaprika API](https://api.coinpaprika.com)

---

## ✨ 향후 계획

- 즐겨찾기(북마크) 기능
- 다른 코인 목록 확장
- 머밀 대응을 위한 반응형 UI
- 다양한 기간별 차트 (1일/1주/1개월 등)

---

## 📸 예시 화면

> 여기에 앱 스크린샷 또는 GIF 추가

---

## 🙋‍♂️ 개발자

| 이름   | 역할                                           |
| ------ | ---------------------------------------------- |
| 손민석 | Frontend Developer (React, TypeScript, Design) |

---
