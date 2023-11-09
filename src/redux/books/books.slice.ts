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
  id: string;
  info: string;
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
  public currentQuery: string = "";
  public currentPage: number = 1;
  public filter: { queryInTitle: boolean } = { queryInTitle: false };
}

export const booksPerPageNumber = 20;

export const booksSlice = createSlice({
  initialState: { ...new BooksState() },
  name: StoreKeys.Books,
  reducers: {
    getBooks: (state, _action: PayloadAction<string>) => state,
    addBooks: (state, _action: PayloadAction<number>) => state,
    setBooks: (state, action: PayloadAction<BooksType>) => {
      state.books = action.payload;
    },
    addBooksItems: (state, action: PayloadAction<BookItem[]>) => {
      console.log(action.payload);
      const newItems = [];
      newItems.push(...state.books.items);
      if(action.payload) newItems.push(...action.payload);
      state.books.items = newItems;
    },
    setResponseCommunicate: (state, action: PayloadAction<string>) => {
      state.responseCommunicate = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    clearBooksState: (state, _action) => {
      state.books = { ...state.books, items: [] };
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCurrentQuery: (state, action: PayloadAction<string>) => {
      state.currentQuery = action.payload;
    },
    setfilterQueryInTitle: (state, action: PayloadAction<boolean>) => {
      state.filter.queryInTitle = action.payload;
    },
  },
});

export const booksActions = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

export type booksActions = ActionsType<typeof booksActions>;
