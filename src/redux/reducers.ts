import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import { booksReducer } from './books/books.slice'

import storage from 'redux-persist/lib/storage'
import { StoreKeys } from './store.keys'
import { StoreType } from './store.types'

const persistConfig = {
  key: "root",
  throttle: 1000,
  storage: storage,
  whitelist: [
  //here store to persist
  ],
  transforms: [],
};

export const reducers = {
  [StoreKeys.Books]: booksReducer,
};

export type Store = StoreType<typeof reducers>

export default persistReducer(persistConfig, combineReducers(reducers))
