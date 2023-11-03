import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "data",
  initialState: {
    unsortedData: [],
    categorySortedData: [],
    priceSortedData: [],
  },
  reducers: {
    setunsortedData: (state, action) => {
      state.unsortedData.push(...action.payload);
    },
    setCategorySortedData: (state, action) => {
      state.categorySortedData.push(...action.payload);
    },
    setPriceSortedData: (state, action) => {
      state.priceSortedData.push(...action.payload);
    },
  },
});

export const { setunsortedData, setCategorySortedData, setPriceSortedData } =
  DataSlice.actions;

export default DataSlice.reducer;
