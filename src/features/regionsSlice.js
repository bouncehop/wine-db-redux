import { createSlice } from '@reduxjs/toolkit'

export const regionsSlice = createSlice({
  name: 'regions',
  initialState: { value: [] },
  reducers: {
    setRegions: (state, action) => {
      state.value = action.payload;
    },

    
  },
})

export const { setRegions } = regionsSlice.actions

export default regionsSlice.reducer