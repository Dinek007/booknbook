import createSagaMiddleware from 'redux-saga'
import rootSaga from './root.saga'

import reducers from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore'

const sagaMiddleware = createSagaMiddleware({
  onError(err) {
    console.error(err)
  }
})

export default () => {
  const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
  })
  sagaMiddleware.run(rootSaga)

  const persistor = persistStore(store)

  return {store, persistor}
}