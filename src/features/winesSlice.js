import { createSlice } from '@reduxjs/toolkit'

export const winesSlice = createSlice({
  name: 'wines',
  initialState: { value: [] },
  reducers: {
    setWines: (state, action) => {
      state.value = action.payload;
    },
    
  },
})

export const { setWines } = winesSlice.actions

export default winesSlice.reducer