import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "data",
  initialState: { filter: "none" },
  reducers: {
    setStoreFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setStoreFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
