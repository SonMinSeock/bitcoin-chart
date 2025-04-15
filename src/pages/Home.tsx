// pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useBitcoinPriceQuery } from "../hooks/useBitcoinPriceQuery";

const Home = () => {
  const { data, isLoading, isError, error } = useBitcoinPriceQuery("KRW");

  if (isLoading) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생: {(error as Error).message}</p>;

  return (
    <div className="home-container">
      <h2>코인 목록</h2>
      <ul>
        {data?.map((coin) => (
          <li key={coin.id}>
            <Link to={`/coin/${coin.id}`}>
              {coin.name} ({coin.symbol})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
