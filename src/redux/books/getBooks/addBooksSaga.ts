import { call, put, select } from "typed-redux-saga";
import { booksActions, booksPerPageNumber } from "../books.slice";
import { booksSelectors } from "../books.selectors";

export function* addBooksSaga(action: booksActions["addBooks"]) {
  let responseGetBooks;
  yield* put(booksActions.setIsLoading(true));

  const currentQuery = yield* select(booksSelectors.currentQuery);
  const currentPage = action.payload;
  const startIndex = currentPage * booksPerPageNumber;
  yield* put(booksActions.setResponseCommunicate(""));

  try {
    responseGetBooks = yield* call(
      fetchBooksFromApi,
      currentQuery,
      startIndex.toString()
    );

    if (responseGetBooks?.error?.message) {
      yield* put(
        booksActions.setResponseCommunicate(responseGetBooks.error.message)
      );
    } else if (!responseGetBooks?.items?.length) {
      yield* put(booksActions.setCurrentPage(1000000));
    }

    yield* put(booksActions.addBooksItems(responseGetBooks?.items));
    yield* put(booksActions.setCurrentPage(currentPage + 1));
  } catch (error) {
    console.error(error);
  }

  yield* put(booksActions.setIsLoading(false));
}

const fetchBooksFromApi = (query: string, startIndex: string): Promise<any> => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}&maxResults=${booksPerPageNumber}`
  )
    .then((response) => response.json())
    .catch((error) => error);
};
