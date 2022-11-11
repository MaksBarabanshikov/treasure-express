import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";

export interface IWalletSlice {
    wallet: string | null;
    walletShort: string | null;
    balance: number | null;
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
            const wallet = accounts[0]
            const balance = await (web3.eth.getBalance(wallet));



            const walletStart = wallet.slice(0, 5)
            const walletDots = '...'
            const walletEnd = wallet.substring( wallet.length - 2 , wallet.length)

            const walletShort = walletStart.concat(walletDots, walletEnd)

            if (!accounts[0]) {
                throw new Error('Error');
            }

            return {
                wallet,
                walletShort,
                balance
            };
        } catch (error: any) {
            alert(error.message)
            return rejectWithValue(error.message)
        }
    }
)

const initialState: IWalletSlice = {
    wallet: null,
    walletShort: null,
    balance: null,
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
                state.wallet = action.payload.wallet
                state.walletShort = action.payload.walletShort
                state.balance = Number(action.payload.balance);
                state.status = 'fulfilled'
            });
    }
})


export default walletSlice.reducer;
