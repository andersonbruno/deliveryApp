import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockStores } from '../../mock/stores';

interface IItems {
    quantity: number,
    itemId: number,
    comment: string,
    price: number,
    name: string,
    description: string,
    id: number
}

interface IBag {
    storeId: number,
    storeName: string,
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

interface ItemRemovedPayload {
    quantity: number,
    id: number,
    price: number
}

const initialState: IBag = {
    storeId: 0,
    storeName: '',
    TotalPrice: 0,
    TotalItems: 0,
    items: []
};

const bagSlice = createSlice({
    name: 'bag',
    initialState,
    reducers: {
        clearBag: () => {
            localStorage.setItem('bag', JSON.stringify(initialState));

            return initialState;
        },
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
            const newItems = state.storeId == storeId ? [...state.items, {itemId: item.id, quantity, comment, price: item.price, name: item.name, description: item.description, id: Math.random()}] : [{itemId: item.id, quantity, comment, price: item.price, name: item.name, description: item.description, id: Math.random()}];

            const newState = { 
                storeId: store?.id || 0,
                storeName: store.name,
                TotalItems: newTotalItems,
                TotalPrice: newTotalPrice,
                items: newItems
            };

            localStorage.setItem('bag', JSON.stringify(newState));

            return state = newState;
        },
        removeItem: (state, action: PayloadAction<ItemRemovedPayload>) => {
            const { id, quantity, price } = action.payload;

            const newItems = state.items.filter((item) => {
                return item.id !== id
            });

            const newState = { 
                storeId: state.storeId,
                storeName: state.storeName,
                TotalItems: state.TotalItems - quantity,
                TotalPrice: state.TotalPrice - (price * quantity),
                items: newItems
            };

            localStorage.setItem('bag', JSON.stringify(newState));

            return state = newState;
        }
    }
});

export const { clearBag, addItem, setBag, removeItem } = bagSlice.actions;

export default bagSlice.reducer;