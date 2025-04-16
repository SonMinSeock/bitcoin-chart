export interface CoinQuote {
  price: number;
  volume_24h: number;
  market_cap: number;
  percent_change_1h: number;
  percent_change_6h: number;
  percent_change_12h: number;
  percent_change_24h: number;
}

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  quotes: {
    KRW: CoinQuote;
    USD: CoinQuote;
  };
}

export const fetchBitcoinPrice = async (
  currency: 'KRW' | 'USD'
): Promise<CoinData[]> => {
  try {
    const response = await fetch(
      `https://api.coinpaprika.com/v1/tickers?quotes=${currency}`
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // 에러 로그 출력 (선택 사항)
    console.error('fetch error:', error);

    // 예외를 상위로 다시 던지기 (호출한 쪽에서 처리할 수 있게)
    throw error;
  }
};

export const fetchBitcoinPriceDetail = async (
  currency: 'KRW' | 'USD',
  id: string
): Promise<CoinData> => {
  try {
    const response = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${id}?quotes=${currency}`
    );
    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // 에러 로그 출력 (선택 사항)
    console.error('fetch error:', error);

    // 예외를 상위로 다시 던지기 (호출한 쪽에서 처리할 수 있게)
    throw error;
  }
};
