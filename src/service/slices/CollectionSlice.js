import { createSlice } from "@reduxjs/toolkit";
import { ADD_COLLECTION, REMOVE_COLLECTION } from "../constants";

const collectionSlice = createSlice({
  name: "collections",
  initialState: {
    collectionsData: [],
  },
  reducers: {
    addCollection: (state, action) => {
      return {
        ...state,
        collectionsData: [...state?.collectionsData, action.payload],
      };
    },
    removeCollection: (state, action) => {
      const filteredData = state?.collectionsData?.filter(
        (collection) => collection.id !== action?.payload?.id
      );
      return {
        ...state,
        collectionsData: filteredData,
      };
    },
  },
});

export { collectionSlice };
export const { addCollection, removeCollection } = collectionSlice.actions;
