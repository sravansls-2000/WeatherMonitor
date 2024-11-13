import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const rigisterAction = createAsyncThunk(
  'users/Rigister',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.post(
        'http://localhost:8008/rigister',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const loginUserAction = createAsyncThunk(
  'users/login',
  async ({ Email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        'http://localhost:8008/login',
        JSON.stringify({ Email, password }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { data } = response;
      if (response.status === 200) {
        localStorage.setItem('token', data.user);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      throw new Error('Your Credential are wrong Please check');
    }
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    Msg: '',
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rigisterAction.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(rigisterAction.fulfilled, (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.isSuccess = true;
      state.Msg = action.payload.msg;
    });
    builder.addCase(rigisterAction.rejected, (state, action) => {
      console.log(action);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = 'Please rigster Again!';
    });
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.Msg = action.payload.msg;
    });
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = 'Please Login Again!';
    });
  },
});
export const { clearState } = usersSlice.actions;
export const userSelector = (state) => state.User;
