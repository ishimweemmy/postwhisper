import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
    },
    // eslint-disable-next-line no-unused-vars
    logout: (state, { payload }) => {
      state.token = "";
    },
  },
});
export default userSlice.reducer;
export const { signup, login, logout } = userSlice.actions;
