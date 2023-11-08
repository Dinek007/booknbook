import { createSelector } from "@reduxjs/toolkit";
import { StoreKeys } from "../store.keys";
import { CreatedSelectors, StoreState } from "../store.types";

const booksSlice: CreatedSelectors[StoreKeys.Books] = (state: StoreState) =>
  state[StoreKeys.Books];

const booksDataToShow = createSelector(booksSlice, (reducerState) => {
  return reducerState?.books?.items?.map((item) => {
    console.log(item?.volumeInfo);
    return {
      author: item?.volumeInfo?.authors?.join(", "),
      title: item?.volumeInfo?.title,
      img:
        item?.volumeInfo?.imageLinks?.thumbnail ||
        item?.volumeInfo?.imageLinks?.smallThumbnail,
    };
  });
});

const responseCommunicate = createSelector(booksSlice, (reducerState) => {
  return reducerState.responseCommunicate;
});

const isLoading = createSelector(booksSlice, (reducerState) => {
  return reducerState.isLoading;
});

export const booksSelectors = {
  booksDataToShow,
  responseCommunicate,
  isLoading,
};
