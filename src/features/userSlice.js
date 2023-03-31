import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },

  reducers: {
    loginuser: (state, actions) => {
      state.user = actions.payload;
    },
    logoutuser: (state) => {
      state.user = null;
    },
  },

});

export const { loginuser, logoutuser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
