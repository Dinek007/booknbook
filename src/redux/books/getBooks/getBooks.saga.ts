import { call, put } from "typed-redux-saga";
import { booksActions, booksPerPageNumber } from "../books.slice";
import { Communicates } from "../../../consts";

export function* getBooksSaga(action: booksActions["getBooks"]) {
  let responseGetBooks;

  yield* put(booksActions.setIsLoading(true));
  yield* put(booksActions.setResponseCommunicate(""));
  yield* put(booksActions.clearBooksState({}));
  yield* put(booksActions.setCurrentQuery(action.payload));

  try {
    responseGetBooks = yield* call(fetchBooksFromApi, action.payload);

    if (responseGetBooks?.error?.message) {
      yield* put(
        booksActions.setResponseCommunicate(responseGetBooks.error.message)
      );
    } else if (!responseGetBooks?.items?.length) {
      yield* put(booksActions.setResponseCommunicate(Communicates.NotFound));
    }

    yield* put(booksActions.setBooks(responseGetBooks));
    yield* put(booksActions.setCurrentPage(1));
  } catch (error) {
    console.error(error);
  }

  yield* put(booksActions.setIsLoading(false));
}

const fetchBooksFromApi = (query: string): Promise<any> => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=${booksPerPageNumber}`
  )
    .then((response) => response.json())
    .catch((error) => error);
};