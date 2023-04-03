import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
export const regesterUser = createAsyncThunk(
  "auth/regester",
  async (userData, thunkAPI) => {
    try {
      return await authService.regester(userData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(regesterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(regesterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createUser = action.payload;
        if(state.isSuccess === true){
          toast.info("User Regester Successfully!")
        }
      })
      .addCase(regesterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.message = action.error;
        if(state.isError === true){
          toast.error(action.error)
        }
      });
  },
});

export default authSlice.reducer;
