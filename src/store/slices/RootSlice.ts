import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import Web3 from "web3";

interface IWalletSlice {
    wallet: string | null;
    status: string | null;
    error: string | null;
}

export const connectMetamask = createAsyncThunk<string, undefined, { rejectValue: string }>(
    'wallet/connectMetamask',
    // @ts-ignore
    async function (_, {rejectWithValue}) {
        try {
            const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
            const accounts: any = await web3.eth.requestAccounts();

            console.log(accounts[0])

            if (!accounts[0]) {
                throw new Error('Error');
            }

            const currentAccount = accounts[0];

            return currentAccount;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState: IWalletSlice = {
    wallet: null,
    status: null,
    error: null,
}

// @ts-ignore
const walletSlice = createSlice({
    name: 'walletSlice',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(connectMetamask.pending, (state: any) => {
                state.status = 'loading';
            })
            .addCase(connectMetamask.rejected, (state: any, action: any) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(connectMetamask.fulfilled, (state: any, action: any) => {
                state.wallet = action.payload
                state.status = 'fulfilled'
            });
    }
})


export default walletSlice.reducer;