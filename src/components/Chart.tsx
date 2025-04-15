// components/Chart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";
import { useBitcoinPriceQuery } from "../hooks/useBitcoinPriceQuery";

interface ChartProps {
  currency: "KRW" | "USD";
}

const Chart = ({ currency }: ChartProps) => {
  const { data, isLoading, isError, error } = useBitcoinPriceQuery(currency);

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {(error as Error).message}</p>;

  // price에 안전하게 접근
  const currentPrice = data?.[0]?.quotes[currency]?.price ?? 0;

  // 시간 흐름에 따른 더미 데이터 (실제로는 API percent_change_xx로 만들 수도 있음)
  const chartData = [
    currentPrice * (1 + (data?.[0]?.quotes[currency]?.percent_change_12h ?? 0) / 100),
    currentPrice * (1 + (data?.[0]?.quotes[currency]?.percent_change_6h ?? 0) / 100),
    currentPrice * (1 + (data?.[0]?.quotes[currency]?.percent_change_1h ?? 0) / 100),
    currentPrice,
  ];

  const categories = ["12시간 전", "6시간 전", "1시간 전", "지금"];

  return (
    <div>
      <h3>{currency} 시세 차트</h3>
      <ReactApexChart
        type="line"
        series={[
          {
            name: "Price",
            data: chartData,
          },
        ]}
        options={{
          chart: {
            height: 250, // 차트 높이를 250으로 설정 (이 부분 수정)
            type: "line",
            zoom: {
              enabled: true,
            },
          },
          stroke: {
            curve: "smooth",
          },
          title: {
            text: "비트코인 가격 변화",
            align: "center",
          },
          xaxis: {
            categories,
            title: {
              text: "시간",
            },
          },
          yaxis: {
            title: {
              text: `${currency} 가격`,
            },
          },
          tooltip: {
            y: {
              formatter: (value: number) => `${value.toFixed(2)} ${currency}`,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;
