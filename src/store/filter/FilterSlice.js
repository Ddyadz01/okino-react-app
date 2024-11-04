import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'counter',
  initialState: {
    ganre: 'Все',
  },
  reducers: {
    setGanre: (state, action) => {
      state.ganre = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGanre } = FilterSlice.actions;

export default FilterSlice.reducer;
