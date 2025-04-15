import React from "react";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <Chart currency="KRW" />
      <Chart currency="USD" />
    </div>
  );
}

export default App;
