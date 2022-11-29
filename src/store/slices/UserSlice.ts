import {createSlice} from "@reduxjs/toolkit";

interface IUserSlice {
  user: string[] | null;
  isReg: boolean;
}

const initialState: IUserSlice = {
  user: null,
  isReg: false,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state:IUserSlice, action) => void (state.user = action.payload),
    setIsReg: (state:IUserSlice, action) => void (state.isReg = action.payload)
  }
})

export const { setUser, setIsReg } = userSlice.actions;

export default userSlice.reducer;
