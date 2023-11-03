import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./slice/DataSlice";
import FilterSlice from "./slice/FilterSlice";
const store = configureStore({
  reducer: {
    posts: DataSlice,
    filter: FilterSlice,
  },
});
export default store;
