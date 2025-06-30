import { createSlice } from '@reduxjs/toolkit';

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    items: []
  },
  reducers: {
    addCourse: (state, action) => {
      state.items.push(action.payload);
    },
    updateCourse: (state, action) => {
      const index = state.items.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteCourse: (state, action) => {
      state.items = state.items.filter(course => course.id !== action.payload);
    }
  }
});

export const { addCourse, updateCourse, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
