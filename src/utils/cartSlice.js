import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    deleteItem: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []
      //   return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
