import {combineReducers, configureStore} from "@reduxjs/toolkit";
import walletReducer from './slices/RootSlice';
import scrollSlice from "./slices/ScrollSlice";

const rootReducer = combineReducers({

})

export default configureStore({
    reducer: {
        wallet: walletReducer,
        scroll: scrollSlice
    }

})