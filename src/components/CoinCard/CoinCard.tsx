import React from "react";
import { CoinData } from "../../services/coinApi";
import { Link } from "react-router-dom";

interface CoinCardProps {
  data: CoinData[];
}

function CoinCard({ data }: CoinCardProps) {
  return (
    <div className="coin-grid">
      {data?.map((coin) => (
        <div key={coin.id} className="coin-card">
          <Link to={`/coin/${coin.id}`}>
            {coin.name} ({coin.symbol})
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CoinCard;
