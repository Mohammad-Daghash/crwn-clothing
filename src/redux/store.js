// import { applyMiddleware, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});

export default store;
