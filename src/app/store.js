import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from '../features/coursesSlice';
import authReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer
  }
});

export default store;