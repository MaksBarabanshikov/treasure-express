import {createSlice} from "@reduxjs/toolkit";

interface ILevelSlice {
    priceLevels: number[];
    activeLevels: boolean[];
    payoutsLevels: number[];
    maxPayouts: number[];
    activationTimes: number[];
    rewardSum: number[];
    referralPayoutSum: number[];
}

const initialState: ILevelSlice = {
    priceLevels: [],
    activeLevels: [],
    payoutsLevels: [],
    maxPayouts: [],
    activationTimes: [],
    rewardSum: [],
    referralPayoutSum: [],
}

const levelSlice = createSlice({
    name: 'levelSlice',
    initialState,
    reducers: {
        initLevels(state: ILevelSlice, action) {
            state.activeLevels = action.payload.levels[0]
            state.payoutsLevels = action.payload.levels[1]
            state.maxPayouts = action.payload.levels[2]
            state.activationTimes = action.payload.levels[3]
            state.rewardSum = action.payload.levels[4]
            state.referralPayoutSum = action.payload.levels[5]
        },
        initPriceLevels(state: ILevelSlice, action) {
            state.priceLevels = action.payload
        }
    }
})

export const { initLevels, initPriceLevels } = levelSlice.actions

export default levelSlice.reducer;
