import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';
import ProductSaga from './Productsaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(ProductSaga);

export default store;
