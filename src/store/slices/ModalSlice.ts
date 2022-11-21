import {createSlice} from "@reduxjs/toolkit";

interface IModalSlice {
  regIsVisible: boolean;
  paymentsIsVisible: boolean;
}

const initialState: IModalSlice = {
  regIsVisible: false,
  paymentsIsVisible: false,
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
    showPaymentsModal(state) {
      state.paymentsIsVisible = true
    },
    hidePaymentsModal(state) {
      state.paymentsIsVisible = false
    },

  }
})

export const { hideRegModal, showRegModal, showPaymentsModal, hidePaymentsModal } = modalSlice.actions

export default modalSlice.reducer;
