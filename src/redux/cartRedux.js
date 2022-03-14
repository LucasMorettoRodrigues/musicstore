import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const product = state.products.find((product) => product._id === action.payload._id)
      state.products =
        product
          ? state.products.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
          : [...state.products, { ...action.payload, quantity: 1 }]
    },
    removeProduct: (state, action) => {
      state.products =
        state.products.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload._id)
    },
  },
});

export const { addProduct, removeProduct, deleteProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
