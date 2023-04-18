import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducer from './slise';

const rootReducer = combineReducers({
    toolkit: reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});