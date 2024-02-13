import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {JobState , JobResponse , JobReducer} from '../Components/interfaces'


const initialState: JobReducer = {
  data: null,
  isLoading: false,
  error: null,
};

// Create the slice
const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    fetchJobsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchJobsSuccess(state, action: PayloadAction<JobResponse>) {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchJobsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } = jobSlice.actions;

export default jobSlice.reducer;