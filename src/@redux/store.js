import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';
import { createRootReducer } from './index';

export default (history, initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    reducer: createRootReducer(history),
    preloadedState: initialState,
    devTools: true,
  });

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
};
