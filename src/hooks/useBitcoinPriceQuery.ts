import { useQuery } from "@tanstack/react-query";
import { getBitcoinPrice } from "../services/coinApi";

export const useBitcoinPriceQuery = (currency: "KRW" | "USD") => {
  return useQuery({
    queryKey: ["bitcoinPrice", currency],
    queryFn: () => getBitcoinPrice(currency),
    staleTime: 1000 * 60, // 1분 동안 fresh
  });
};
