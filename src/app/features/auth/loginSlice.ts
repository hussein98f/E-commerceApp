import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
import axiosInstance from "../../../config/axios.config";
import { createStandaloneToast } from "@chakra-ui/react";
import CookiesService from "../../../services/Cookie";
// Define a type for the slice state
interface CounterState {
  loading: boolean;
  data: null;
  error: null;
}
interface UserLoginData {
  identifier: string;
  password: string;
}
// Define the initial state using that type
const initialState: CounterState = {
  loading: false,
  data: null,
  error: null,
};

const { toast } = createStandaloneToast();

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user: UserLoginData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const { data } = await axiosInstance.post("/auth/local", user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(userLogin.pending, (state, actions) => {
      state.loading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, actions) => {
      state.loading = false;
      state.data = actions.payload;
      state.error = null;
      const date = new Date();
      date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 3);
      // const opyions = { path: "/", expires: date, httpOnly: true };
      const opyions = { path: "/", expires: date };
      CookiesService.set("jwt", actions.payload.jwt, opyions);
      toast({
        title: "Account created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => window.location.reload(), 1000);
    });
    builder.addCase(userLogin.rejected, (state, actions) => {
      state.loading = false;
      state.data = [];
      state.error = actions.error.message;
      toast({
        title: actions.payload.response.data.error.message,
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    });
  },
});

// export const { incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const selectLogin = ({ login }) => login;
export default loginSlice.reducer;
