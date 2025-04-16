import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useBitcoinPriceDetailQuery } from "../hooks/useBitcoinPriceQuery";
import Chart from "../components/Chart/Chart";

const CoinDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currency, setCurrency] = useState<"KRW" | "USD">("KRW");
  const [chartType, setChartType] = useState<"line" | "bar" | "area" | undefined>();
  const { data, isLoading, isError, error } = useBitcoinPriceDetailQuery(currency, id ?? "");

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {(error as Error).message}</p>;

  if (!data) return <p>해당 코인을 찾을 수 없습니다.</p>;

  // price에 안전하게 접근
  const price = data?.quotes[currency]?.price ?? 0;

  // 차트 선택 핸들러
  const handleSelectChartType = (type: "line" | "bar" | "area" | undefined) => {
    setChartType(type);
  };

  // 차트 닫기 핸들러
  const handleCloseChart = () => setChartType(undefined);

  return (
    <div className="coin-detail-container">
      <Link to="/" className="back-home">
        ← 홈으로
      </Link>
      <h2>
        {data.name} ({data.symbol}) 상세 정보
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
        <div>
          <button onClick={() => handleSelectChartType("line")} className={chartType === "line" ? "active" : ""}>
            라인 차트
          </button>
          <button onClick={() => handleSelectChartType("bar")} className={chartType === "bar" ? "active" : ""}>
            막대 차트
          </button>
          <button onClick={() => handleSelectChartType("area")} className={chartType === "area" ? "active" : ""}>
            영역 차트
          </button>
        </div>
        {chartType && (
          <Chart
            key={chartType}
            chartType={chartType}
            closeChart={handleCloseChart}
            coinName={data.name}
            coinQuote={data.quotes[currency]}
            currency={currency}
          />
        )}
      </div>
    </div>
  );
};

export default CoinDetail;
