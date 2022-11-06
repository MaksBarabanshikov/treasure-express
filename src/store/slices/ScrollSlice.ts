import {createSlice} from "@reduxjs/toolkit";

interface IScrollSlice {
    disabled: boolean;
}

const initialState: IScrollSlice = {
    disabled: false
}

// @ts-ignore
const scrollSlice = createSlice({
    name: 'scrollSlice',
    initialState,
    reducers: {
        disabledScroll(state) {
            state.disabled = true
        },
        enabledScroll(state) {
            state.disabled = false
        }
    }
})

export const { disabledScroll, enabledScroll } = scrollSlice.actions

export default scrollSlice.reducer;