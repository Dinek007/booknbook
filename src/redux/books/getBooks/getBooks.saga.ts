import { call, put } from "typed-redux-saga";
import { booksActions } from "../books.slice";

export function* getBooksSaga(action: booksActions["getBooks"]) {
  let responseGetBooks;
  try {
    responseGetBooks = yield call(fetchBooksFromApi, action.payload);
    yield put(booksActions.setBooks(responseGetBooks));
  } catch (error) {
    console.error(error);
  }
}

const fetchBooksFromApi = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => response.json())
      .catch((error) => error);
  }