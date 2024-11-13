import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  user: any;
  isVegMode: boolean;
};

const initialState: UserState = {
  user: {},
  isVegMode: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
    setVegMode: (state, action: PayloadAction<boolean>) => {
      state.isVegMode = action.payload;
    },
  },
});

export const { setUser, setVegMode } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
