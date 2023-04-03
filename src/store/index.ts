import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './reducers/modal';

const store = configureStore({
    reducer: {
        modal: modalSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;