import React from "react";
import ReactApexChart from "react-apexcharts";
import { useBitcoinPriceQuery } from "../hooks/useBitcoinPriceQuery";

interface ChartProps {
  currency: "KRW" | "USD";
}

function Chart({ currency }: ChartProps) {
  const { data, isLoading, isError, error } = useBitcoinPriceQuery(currency);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {(error as Error).message}</p>;

  const current = data?.price ?? 0;

  // 시간 흐름에 따른 더미 데이터 (실제로는 API percent_change_xx로 만들 수도 있음)
  const chartData = [
    current * (1 + (data?.percent_change_12h ?? 0) / 100),
    current * (1 + (data?.percent_change_6h ?? 0) / 100),
    current * (1 + (data?.percent_change_1h ?? 0) / 100),
    current,
  ];

  const categories = ["12시간 전", "6시간 전", "1시간 전", "지금"];
  return (
    <div style={{ maxWidth: "100%", height: "300px" }}>
      <h2>
        현재 비트코인 가격 ({currency}):{" "}
        {current.toLocaleString(undefined, {
          maximumFractionDigits: 0,
        })}{" "}
        {currency}
      </h2>

      <ReactApexChart
        type="line"
        height={250} // 차트 높이 축소
        series={[
          {
            name: "Price",
            data: chartData,
          },
        ]}
        options={{
          chart: {
            type: "line",
            height: 250,
            toolbar: { show: false },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          xaxis: {
            categories: categories,
          },
          yaxis: {
            labels: {
              formatter: (value) => value.toLocaleString(),
            },
          },
          tooltip: {
            y: {
              formatter: (value) => `${value.toLocaleString()} ${currency}`,
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;
