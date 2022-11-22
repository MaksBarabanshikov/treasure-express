import {createAsyncThunk, createSlice, Draft} from "@reduxjs/toolkit";
import Web3 from "web3";
import type {Contract} from "web3-eth-contract";
import {getShortWallet} from "../../helper";

export interface IWeb3Res {
    wallet: string;
    walletShort: string;
    check: number;
    currentGasLimit: string;
}

export interface IWeb3Slice {
    wallet: string | null;
    walletShort: string | null;
    check: number | null;
    status: string | null;
    error: string | null;
    CONTRACT_LIST: Contract | null;
    currentGasLimit: string;
}

const initialWallet = localStorage.getItem("accounts")
  ? JSON.parse(localStorage.getItem("accounts")!)
  : null

const initialState: IWeb3Slice = {
    wallet: initialWallet,
    walletShort: null,
    check: null,
    status: null,
    error: null,
    CONTRACT_LIST: null,
    currentGasLimit: ''
}

// @ts-ignore
const web3Slice = createSlice({
    name: 'walletSlice',
    initialState,
    reducers: {
        getListABI: (state,action) => {
            state.CONTRACT_LIST = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(connectWeb3.pending, (state: Draft<IWeb3Slice>) => {
                state.status = 'loading';
            })
            .addCase(connectWeb3.rejected, (state: Draft<IWeb3Slice>, action: any) => {
                state.status = 'rejected'
                state.error = action.payload
            })
            .addCase(connectWeb3.fulfilled, (state: Draft<IWeb3Slice>, action: any) => {
                const payload: IWeb3Res = action.payload;
                const { wallet, walletShort, check, currentGasLimit } = payload;
                state.wallet = wallet
                state.walletShort = walletShort
                state.check = check;
                state.currentGasLimit = currentGasLimit
                state.status = 'fulfilled'
            });
    }
})

export const connectWeb3 = createAsyncThunk<string, undefined, { rejectValue: string }>(
    'wallet/connectMetamask',
    // @ts-ignore
    async function (_, { rejectWithValue }) {
        try {
            const web3 = new Web3(Web3.givenProvider);
            const accounts: string[] = await web3.eth.requestAccounts();

            if (!accounts[0]) {
                throw new Error('accounts[0] error');
            }

            const wallet = accounts[0]

            localStorage.setItem("accounts", JSON.stringify(wallet))

            const check = Number(await (web3.eth.getBalance(wallet)))

            const currentGasLimit = await web3.eth.getGasPrice()

            const walletShort = getShortWallet(wallet)

            return {
                wallet,
                walletShort,
                check,
                currentGasLimit
            } as IWeb3Res;

        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const { getListABI } = web3Slice.actions

export default web3Slice.reducer;
