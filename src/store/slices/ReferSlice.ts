import { createSlice } from "@reduxjs/toolkit";

interface IReferSlice {
  userId: string | null;
  refAddress: string | null;
}

const initialState: IReferSlice = {
  userId: null,
  refAddress: null
}

const referSlice = createSlice({
  name: 'referSlice',
  initialState,
  reducers: {
    setUserId: (state: IReferSlice, action) => void(state.userId = action.payload),
    setRefAddress: (state: IReferSlice, action) => void(state.refAddress = action.payload)
  }
})

export const { setUserId, setRefAddress } = referSlice.actions

export default referSlice.reducer
