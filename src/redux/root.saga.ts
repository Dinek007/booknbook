import { all, fork } from "typed-redux-saga";
import { booksMasterSaga } from "./books/books.master.saga";

export default function* root() {
  yield* all([
    fork(booksMasterSaga),
  ]);
}