import { ADD_COLLECTION, REMOVE_COLLECTION } from "../constants";

export const addToCollection = (data) => {
  return {
    type: ADD_COLLECTION,
    data: data,
  };
};

export const removeFromCollection = (data) => {
  return {
    type: REMOVE_COLLECTION,
    data: data,
  };
};
