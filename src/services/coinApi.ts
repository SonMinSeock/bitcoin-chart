const BASE_URL = "https://api.coinpaprika.com/v1";

// 비트코인 현재 시세 가져오기
export const getTicker = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tickers/btc-bitcoin`);
    if (!res.ok) {
      throw new Error(`API 오류: ${res.status} - ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    // 네트워크 오류 또는 API 오류 처리
    if (error instanceof Error) {
      console.error("Fetch 에러:", error.message);
      throw new Error(`데이터를 가져오는 데 실패했습니다: ${error.message}`);
    }
    throw new Error("알 수 없는 에러 발생");
  }
};

// OHLCV(시가, 고가, 저가, 종가, 거래량) 데이터 가져오기
export const getOHLCV = async () => {
  try {
    const today = new Date(); // 오늘 날짜 가져오기, ex) 2025-04-15T14:23:12.123Z
    const end = today.toISOString().split("T")[0]; // ISO 형식으로 변환하고 날짜 부분만 추출 '2025-04-15'
    const past = new Date(today.setDate(today.getDate() - 7)).toISOString().split("T")[0]; // 7일 전 날짜 계산

    const res = await fetch(`${BASE_URL}/coins/btc-bitcoin/ohlcv/historical?start=${past}&end=${end}`);

    if (!res.ok) {
      throw new Error(`API 오류: ${res.status} - ${res.statusText}`);
    }
    const result = await res.json();
    return result;
  } catch (error) {
    // 네트워크 오류 또는 API 오류 처리
    if (error instanceof Error) {
      console.error("Fetch 에러:", error.message);
      throw new Error(`데이터를 가져오는 데 실패했습니다: ${error.message}`);
    }
    throw new Error("알 수 없는 에러 발생");
  }
};
