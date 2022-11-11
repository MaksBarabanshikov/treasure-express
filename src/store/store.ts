import { configureStore } from "@reduxjs/toolkit";
import walletReducer from './slices/WalletSlice';
import scrollSlice from "./slices/ScrollSlice";
import ModalSlice from "./slices/ModalSlice";

const store = configureStore({
    reducer: {
        wallet: walletReducer,
        scroll: scrollSlice,
        modal: ModalSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
