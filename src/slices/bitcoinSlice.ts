import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BitcoinState {
  priceKRW: number | null; // 한화
  priceUSD: number | null; // 달러
  loading: boolean;
  error: string | null;
}

const initialState: BitcoinState = {
  priceKRW: null,
  priceUSD: null,
  loading: false,
  error: null,
};

const bitcoinSlice = createSlice({
  name: "bitcoin",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setPrice: (state, action: PayloadAction<{ currency: string; price: number }>) => {
      if (action.payload.currency === "KRW") {
        state.priceKRW = action.payload.price;
      } else if (action.payload.currency === "USD") {
        state.priceUSD = action.payload.price;
      }
      state.loading = false;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setPrice, setError } = bitcoinSlice.actions;

export default bitcoinSlice.reducer;
