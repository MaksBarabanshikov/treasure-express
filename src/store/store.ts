import { configureStore } from "@reduxjs/toolkit";
import web3Slice from './slices/Web3Slice';
import scrollSlice from "./slices/ScrollSlice";
import ModalSlice from "./slices/ModalSlice";
import referSlice from "./slices/ReferSlice";
import userSlice from "./slices/UserSlice";
import levelSlice from "./slices/LevelSlice";

const store = configureStore({
    reducer: {
        web3: web3Slice,
        scroll: scrollSlice,
        modal: ModalSlice,
        refer: referSlice,
        user: userSlice,
        levels: levelSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
