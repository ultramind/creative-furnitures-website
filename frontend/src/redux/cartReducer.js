import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// initial state
let initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // check if the product exits
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        toast.info(`${state.cartItems[itemIndex].name} cart updated`, {
          position: "bottom-center",
        });
        // saving on localstorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        let newProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(newProduct);
        toast.success(`${newProduct.name} added to cart`, {
          position: "bottom-center",
        });
        // saving in localstorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
  },
});

// exporting the actions
export const { addToCart } = cartSlice.actions;

// export the reducer
export default cartSlice.reducer;
