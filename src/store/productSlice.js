import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products"
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    product: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },
    [fetchProductById.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [fetchProductById.rejected]: (state, payload) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default productSlice.reducer;