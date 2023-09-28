import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './reducers/modal';
import bagSlice from './reducers/bag';
import bagSigeBarSlice from './reducers/bagSideBar';

const store = configureStore({
    reducer: {
        modal: modalSlice,
        bag: bagSlice,
        bagSideBar: bagSigeBarSlice
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;