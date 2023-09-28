import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBagSideBar {
    status: boolean;
}

const initialState: IBagSideBar = {
    status: true
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openBag: (state) => {
            return state = { status: true }
        },
        closeBag: (state) => {
            return state = { status: false }
        },
        toggle: (state) => {
            return state = { status: !state.status}
        }
    }
});

export const { openBag, closeBag, toggle } = modalSlice.actions;

export default modalSlice.reducer;