import { configureStore } from "@reduxjs/toolkit";
import { collectionSlice } from "../slices/CollectionSlice";

const store = configureStore({
  reducer: {
    collectionReducer: collectionSlice.reducer,
  },
});

export default store;
