import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'React' },
  { id: 2, title: 'JavaScript' }
];
const courseSlice = createSlice({
  name: 'courses',
  initialState,

  reducers: {
    addCourse: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addCourse } = courseSlice.actions;

export default courseSlice.reducer;
