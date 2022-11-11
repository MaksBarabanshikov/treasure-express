import {createSlice} from "@reduxjs/toolkit";

interface IModalSlice {
  regIsVisible: boolean;
}

const initialState: IModalSlice = {
  regIsVisible: false
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    showRegModal(state) {
      state.regIsVisible = true
    },
    hideRegModal(state) {
      console.log(state.regIsVisible);
      state.regIsVisible = false
    }
  }
})

export const { hideRegModal, showRegModal } = modalSlice.actions

export default modalSlice.reducer;
