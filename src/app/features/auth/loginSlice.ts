import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";
import axiosInstance from "../../../config/axios.config";

// Define a type for the slice state
interface CounterState {
  loading: boolean;
  data: null;
  error: null;
}

// Define the initial state using that type
const initialState: CounterState = {
  loading: false,
  data: null,
  error: null,
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(user);
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
    });
    builder.addCase(userLogin.rejected, (state, actions) => {
      state.loading = false;
      state.data = [];
      console.log(actions.error);
      state.error = actions.payload;
    });
  },
});

// export const { incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
export const selectLogin = ({ login }) => login;
export default loginSlice.reducer;
