// services/coinApi.ts

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

export const fetchBitcoinPrice = async (currency: "KRW" | "USD"): Promise<CoinData[]> => {
  const response = await fetch(`https://api.coinpaprika.com/v1/tickers?quotes=${currency}`);
  const data = await response.json();
  return data;
};
