import { useQuery } from "@tanstack/react-query";
import { CoinData, fetchBitcoinPrice, fetchBitcoinPriceDetail } from "../services/coinApi";

// 암호화폐 조회
export const useBitcoinPriceQuery = (currency: "KRW" | "USD") => {
  return useQuery<CoinData[], Error>({
    queryKey: ["bitcoinPrice", currency],
    queryFn: () => fetchBitcoinPrice(currency),
    staleTime: 60 * 1000, // 1분
  });
};

// 해당 암호화폐 정보 조회
export const useBitcoinPriceDetailQuery = (currency: "KRW" | "USD", id: string) => {
  return useQuery<CoinData, Error>({
    queryKey: ["bitcoinPrice", currency, id],
    queryFn: () => fetchBitcoinPriceDetail(currency, id),
    staleTime: 60 * 1000,
  });
};
