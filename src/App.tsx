// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoinDetail from "./pages/CoinDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
