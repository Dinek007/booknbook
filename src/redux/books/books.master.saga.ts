import { all, takeEvery } from "typed-redux-saga";
import { getBooksSaga } from "./getBooks/getBooks.saga";
import { booksActions } from "./books.slice";
import { addBooksSaga } from "./getBooks/addBooksSaga";

export function* booksMasterSaga(): Generator {
  yield all([
    takeEvery(booksActions.getBooks.type, getBooksSaga),
    takeEvery(booksActions.addBooks.type, addBooksSaga),
  ]);
}
