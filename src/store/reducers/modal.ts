import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mockStores } from '../../mock/stores';
import imageDefault from '../../assets/itens/DEFAULT.png';
import { StaticImageData } from 'next/image';

interface IModal {
    itemId: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemImage: StaticImageData;
    storeId: number;
    storeName: string;
    storeNote: number;
    storeTimeToDeliver: number;
    modalOpened: boolean;
}

const initialState: IModal = {
    itemId: 0,
    itemName: '',
    itemDescription: '',
    itemPrice: 0,
    itemImage: imageDefault,
    storeId: 0,
    storeName: '',
    storeNote: 0,
    storeTimeToDeliver: 0,
    modalOpened: false
}

interface IPayload {
    idItem: number;
    idStore: number;
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<IPayload>) => {
            const { idItem, idStore } = action.payload;
            const store = mockStores.find(store => store.id === idStore);
            const item = store?.items.find(item => item.id === idItem);

            return state = {
                itemId: idItem,
                itemName: item?.name as string,
                itemDescription: item?.description as string,
                itemPrice: item?.price as number,
                itemImage: item?.image || state.itemImage,
                storeId: idStore,
                storeName: store?.name as string,
                storeNote: store?.note as number,
                storeTimeToDeliver: store?.timeToDeliver as number,
                modalOpened: true
            };
        },
        closeModal: () => initialState
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;