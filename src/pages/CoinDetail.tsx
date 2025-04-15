import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useBitcoinPriceQuery } from "../hooks/useBitcoinPriceQuery";
import Chart from "../components/Chart";

const CoinDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currency, setCurrency] = useState<"KRW" | "USD">("KRW");

  const { data, isLoading, isError, error } = useBitcoinPriceQuery(currency);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {(error as Error).message}</p>;

  // 첫 번째 코인 데이터 가져오기
  const coinData = data ? data.find((coin) => coin.id === id) : null;

  if (!coinData) return <p>해당 코인을 찾을 수 없습니다.</p>;

  // price에 안전하게 접근
  const price = coinData?.quotes[currency]?.price ?? 0;

  return (
    <div className="coin-detail-container">
      <h2>
        {coinData.name} ({coinData.symbol}) 상세 정보
      </h2>
      <div className="currency-buttons">
        <button className={currency === "KRW" ? "active" : ""} onClick={() => setCurrency("KRW")}>
          원화
        </button>
        <button className={currency === "USD" ? "active" : ""} onClick={() => setCurrency("USD")}>
          달러
        </button>
      </div>
      <p>
        {currency} 시세: {price.toLocaleString()} {currency}
      </p>
      <div className="chart-container">
        <Chart currency={currency} />
      </div>
    </div>
  );
};

export default CoinDetail;
