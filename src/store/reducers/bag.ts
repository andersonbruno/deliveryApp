import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockStores } from '../../mock/stores';

interface IItems {
    quantity: number,
    itemId: number,
    comment: string
}

interface IBag {
    storeId: number,
    TotalPrice: number,
    TotalItems: number,
    items: IItems[]
}

interface ItemPayload {
    storeId: number,
    itemId: number,
    quantity: number;
    comment: string;
}

const initialState: IBag = {
    storeId: 0,
    TotalPrice: 0,
    TotalItems: 0,
    items: []
};

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        clearBag: () => initialState,
        setBag: (state, action: PayloadAction<IBag>) => {
            return state = action.payload;
        },
        addItem: (state, action: PayloadAction<ItemPayload>) => {
            const { itemId, storeId, quantity, comment } = action.payload;
            const store = mockStores.find(store => store.id === storeId);
            if(!store) return state;
            const item = store.items.find(item => item.id === itemId);
            if(!item) return state;

            const newTotalPrice = state.storeId == storeId ? state.TotalPrice + (item.price * quantity) : (item.price * quantity);
            const newTotalItems = state.storeId == storeId ? state.TotalItems + (quantity) : quantity;
            const newItems = state.storeId == storeId ? [...state.items, {itemId: item.id, quantity, comment}] : [{itemId: item.id, quantity, comment}];

            const newState = { 
                storeId: store?.id || 0,
                TotalItems: newTotalItems,
                TotalPrice: newTotalPrice,
                items: newItems
            };

            localStorage.setItem('bag', JSON.stringify(newState));

            return state = newState;
        }
    }
});

export const { clearBag, addItem, setBag } = bagSlice.actions;

export default bagSlice.reducer;