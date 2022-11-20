import {createSlice} from "@reduxjs/toolkit";

interface IUserSlice {
  user: string[] | null;
}

const initialState: IUserSlice = {
  user: null
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state:IUserSlice, action) => void (state.user = action.payload)
  }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
