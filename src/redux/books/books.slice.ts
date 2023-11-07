import {
  ActionCreatorsMapObject,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StoreKeys } from "../store.keys";
import { BookItem } from "./getBooks/booksTypes";

export type ActionsType<A extends ActionCreatorsMapObject> = {
  [actionName in keyof A]: ReturnType<A[actionName]>;
};

type BooksType = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

export class BooksState {
  public books: BooksType = null;
}

export const booksSlice = createSlice({
  initialState: { ...new BooksState() },
  name: StoreKeys.Books,
  reducers: {
    getBooks: (state, _action: PayloadAction<string>) => state,
    setBooks: (state, action: PayloadAction<any>) => {
      state.books = action.payload;
    },
  },
});

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

export type booksActions = ActionsType<typeof booksActions>;
