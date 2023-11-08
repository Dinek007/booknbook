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

export type BooksType = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

export type BooksData = {
  title: string;
  author: string;
  img: string;
};

const initialBooksState: BooksType = {
  items: [],
  kind: "",
  totalItems: 0,
};
export class BooksState {
  public books: BooksType = initialBooksState;
  public responseCommunicate: string = "";
  public isLoading: boolean = false;
}

export const booksSlice = createSlice({
  initialState: { ...new BooksState() },
  name: StoreKeys.Books,
  reducers: {
    getBooks: (state, _action: PayloadAction<string>) => state,
    setBooks: (state, action: PayloadAction<BooksType>) => {
      state.books = action.payload;
    },
    setResponseCommunicate: (state, action: PayloadAction<string>) => {
      state.responseCommunicate = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearBooksState: (state, _action) => {
      state.books = initialBooksState;
    },
  },
});

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

export type booksActions = ActionsType<typeof booksActions>;
