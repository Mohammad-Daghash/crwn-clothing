import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// const defaultExport = { store, persistor };

export default store;
