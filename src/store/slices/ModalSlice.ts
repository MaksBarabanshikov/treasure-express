import {createSlice} from "@reduxjs/toolkit";

interface IModalSlice {
  regIsVisible: boolean;
  paymentsIsVisible: boolean;
  paymentsLevel: number
  paymentsPrice: number
  limit: number
  counter: number
}

const initialState: IModalSlice = {
  regIsVisible: false,
  paymentsIsVisible: false,
  paymentsLevel: 0,
  paymentsPrice: 0,
  limit: 0,
  counter: 3,
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    showRegModal(state) {
      state.regIsVisible = true
    },
    hideRegModal(state) {
      state.regIsVisible = false
    },
    showPaymentsModal(state, action) {
      state.paymentsIsVisible = true
      state.paymentsLevel = action.payload.level
      state.paymentsPrice = action.payload.price
      state.limit = action.payload.limit
      state.counter = action.payload.counter
    },
    hidePaymentsModal(state) {
      state.paymentsIsVisible = false
    },

  }
})

export const { hideRegModal, showRegModal, showPaymentsModal, hidePaymentsModal } = modalSlice.actions

export default modalSlice.reducer;
