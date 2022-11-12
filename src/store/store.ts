import { configureStore } from "@reduxjs/toolkit";
import web3Slice from './slices/Web3Slice';
import scrollSlice from "./slices/ScrollSlice";
import ModalSlice from "./slices/ModalSlice";

const store = configureStore({
    reducer: {
        web3: web3Slice,
        scroll: scrollSlice,
        modal: ModalSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
