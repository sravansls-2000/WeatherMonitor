import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '../slices/userSlice';

export const store = configureStore({
  reducer: {
    User: usersSlice.reducer,
  },
});
