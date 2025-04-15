import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTicker } from "../services/coinApi";

function Chart() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["ticker"], // 쿼리 키 설정
    queryFn: getTicker, // 실제 API 호출 함수
  });

  if (isLoading) return <p>Loading ticker...</p>;
  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>Bitcoin Ticker</h1>
      <p>Current Price: {data?.quotes?.USD?.price} USD</p>
      <p>Market Cap: {data?.quotes?.USD?.market_cap} USD</p>
      <p>24h Volume: {data?.quotes?.USD?.volume_24h} USD</p>
    </div>
  );
}

export default Chart;
