import { createSlice } from "@reduxjs/toolkit";

interface IReferSlice {
  userId: string | null;
  refId: string | null;
}

const initialState: IReferSlice = {
  userId: null,
  refId: null
}

const referSlice = createSlice({
  name: 'referSlice',
  initialState,
  reducers: {
    setUserId: (state: IReferSlice, action) => void(state.userId = action.payload),
    setRefId: (state: IReferSlice, action) => void(state.refId = action.payload)
  }
})

export const { setUserId, setRefId } = referSlice.actions

export default referSlice.reducer
