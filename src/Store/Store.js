import { configureStore } from '@reduxjs/toolkit';
import jobs from './reducer';

export const store = configureStore({
  reducer: {
    jobs: jobs,
  },
});