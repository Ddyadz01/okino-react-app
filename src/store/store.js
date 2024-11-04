import { configureStore } from '@reduxjs/toolkit';
import FilterSlice from './filter/FilterSlice';

export default configureStore({
  reducer: {
    filter: FilterSlice,
  },
});
