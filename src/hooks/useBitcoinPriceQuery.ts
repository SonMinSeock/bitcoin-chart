import { useQuery } from "@tanstack/react-query";
import { CoinData, fetchBitcoinPrice } from "../services/coinApi";

export const useBitcoinPriceQuery = (currency: "KRW" | "USD") => {
  return useQuery<CoinData[], Error>({
    queryKey: ["bitcoinPrice", currency],
    queryFn: () => fetchBitcoinPrice(currency),
    staleTime: 60 * 1000, // 1분
  });
};
