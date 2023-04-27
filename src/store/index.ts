import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './reducers/modal';
import bagSlice from './reducers/bag';

const store = configureStore({
    reducer: {
        modal: modalSlice,
        bag: bagSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;