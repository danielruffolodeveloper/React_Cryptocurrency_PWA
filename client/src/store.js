import { configureStore } from '@reduxjs/toolkit'
import coinReducer from './features/coinSlice'


export const store = configureStore({
  reducer: {
    coin: coinReducer
  },
})