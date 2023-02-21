import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});

export const persistor = persistStore(store);

// const defaultExport = { store, persistor };

export default store;
