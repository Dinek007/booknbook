import { createSelector } from "@reduxjs/toolkit";
import { StoreKeys } from "../store.keys";
import { CreatedSelectors, StoreState } from "../store.types";


const booksSlice: CreatedSelectors[StoreKeys.Books] = (state: StoreState) =>
  state[StoreKeys.Books];

const booksDataToShow = createSelector(booksSlice, (reducerState) => {
  return reducerState?.books?.items?.map((item) => {
    return {
      author: item?.volumeInfo?.authors?.join(", "),
      title: item?.volumeInfo?.title,
      img:
        item?.volumeInfo?.imageLinks?.thumbnail ||
        item?.volumeInfo?.imageLinks?.smallThumbnail,
      id: `${item?.id}${Date.now()}${String.fromCharCode(
        65 + Math.floor(Math.random() * 1000)
      )}`,
      info: `Publish date: ${item?.volumeInfo?.publishedDate} , Language: ${item?.volumeInfo?.language}`,
    };
  });
});

const responseCommunicate = createSelector(booksSlice, (reducerState) => {
  return reducerState.responseCommunicate;
});

const isLoading = createSelector(booksSlice, (reducerState) => {
  return reducerState.isLoading;
});

const currentPage = createSelector(booksSlice, (reducerState) => {
  return reducerState.currentPage;
});

const currentQuery = createSelector(booksSlice, (reducerState) => {
  return reducerState.currentQuery;
});

const booksDataToShowWithQueryInName = createSelector(
  booksDataToShow,
  currentQuery,
  (booksData, query) => {
    const filteredBooksData = booksData?.filter((book) => {
      const bookTitle = book.title.toLowerCase();
      const queryName = query.toLowerCase();

      return bookTitle.includes(queryName);
    });
    return filteredBooksData?.map((book) => {
      return { ...book, id: book.id + "filteredByQueryInName" };
    });
  }
);

export const booksSelectors = {
  booksDataToShow,
  responseCommunicate,
  isLoading,
  currentPage,
  currentQuery,
  booksDataToShowWithQueryInName,
};
