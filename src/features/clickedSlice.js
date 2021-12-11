import { createSlice } from '@reduxjs/toolkit'

export const clickedSlice = createSlice({
  name: 'wine',
  initialState: { value: false },
  reducers: {
    clickState: (state) => {
      state.value = !state.value;
    },
    
  },
})

export const { clickState } = clickedSlice.actions

export default clickedSlice.reducer