const BASE_URL = "https://api.coinpaprika.com/v1/tickers";

export const getBitcoinPrice = async (currency: "KRW" | "USD") => {
  try {
    const url = `${BASE_URL}?quotes=${currency}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const priceInfo = data[0]?.quotes?.[currency];
    if (!priceInfo) {
      throw new Error("Price information is missing in the response.");
    }

    return priceInfo;
  } catch (error) {
    console.error("Failed to fetch Bitcoin price:", error);
    throw error; // 에러를 다시 throw해서 상위에서 처리할 수 있게
  }
};
