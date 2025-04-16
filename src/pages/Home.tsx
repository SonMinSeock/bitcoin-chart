import React from "react";
import { useBitcoinPriceQuery } from "../hooks/useBitcoinPriceQuery";
import CoinCard from "../components/CoinCard/CoinCard";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const Home = () => {
  const { data, isLoading, isError, error } = useBitcoinPriceQuery("KRW");

  if (isError) return <p>에러 발생: {(error as Error).message}</p>;

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <div className="home-container">
        <h2>코인 목록</h2>
        {data && <CoinCard data={data} />}
      </div>
    </>
  );
};

export default Home;
