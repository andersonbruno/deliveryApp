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

interface IPayload {
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
        addItem: (state, action: PayloadAction<IPayload>) => {
            const { itemId, storeId, quantity, comment } = action.payload;
            const store = mockStores.find(store => store.id === storeId);
            if(!store) return state;
            const item = store.items.find(item => item.id === itemId);
            if(!item) return state;

            const newTotalPrice = state.TotalPrice + (item.price * quantity);
            const newTotalItems = state.TotalItems + (quantity);

            return state = { 
                storeId: store?.id || 0,
                TotalItems: newTotalItems,
                TotalPrice: newTotalPrice,
                items: [...state.items, {itemId: item.id, quantity, comment}]
            };
        }
    }
});

export default bagSlice.reducer;