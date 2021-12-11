import { configureStore } from '@reduxjs/toolkit'
import wineReducer from './wineSlice';
import winesReducer from './winesSlice';
import regionsReducer from './regionsSlice';
import clickedReducer from './clickedSlice';

export const store = configureStore({
  reducer: {
    wine: wineReducer,
    wines: winesReducer,
    regions: regionsReducer,
    clicked: clickedReducer

  },
})