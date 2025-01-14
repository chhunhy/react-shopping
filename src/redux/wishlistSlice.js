import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      let currentUser = JSON.parse(atob(localStorage.getItem("currentUser")));

      const isPresent = state.items.some(
        (item) => item.id === action.payload.id && currentUser.id === item.userId
      );

      if (!isPresent) {
        const combined = {
          ...action.payload,
          userId: currentUser.id,
        };
        state.items.push(combined);
        swal("Congratulations!", "Item added to wishlist", "success");
      } else {
        swal("Sorry!", "Item already added to wishlist", "error");
      }
    },
    clearWishlist: (state) => {
      let currentUser = JSON.parse(atob(localStorage.getItem("currentUser")));
      state.items = state.items.filter((item) => item.userId !== currentUser.id);
    },
  },
});

export const { addToWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
