import { createSlice } from '@reduxjs/toolkit'

export const wineSlice = createSlice({
  name: 'wine',
  initialState: { value: {id: '', name: '', type: '', appellation: {name: '', region: ''}, grapes: []} },
  reducers: {
    selectWine: (state, action) => {
      state.value = action.payload;
    },
    
  },
})

export const { selectWine } = wineSlice.actions

export default wineSlice.reducer