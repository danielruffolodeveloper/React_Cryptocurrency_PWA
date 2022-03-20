import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import mapService from '../../api/mapService'

const initialState = {
  selectedCoin:{},
  coins:[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get coins form coingekko using asynk thunk
export const getCoins = createAsyncThunk('coin/getCoins', async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%252C24h%252C7d')
    const data = await response.json()
    return data
})

export const getCoin = createAsyncThunk('coin/getCoin', async (coin) => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
  const data = await response.json()
  return data
})

export const coinSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getCoins.pending, (state) => {
      state.isLoading = true
      state.loadedDirections = false
    })
    .addCase(getCoins.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.coins = action.payload
    })
    .addCase(getCoins.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(getCoin.pending, (state) => {
      state.isLoading = true
      state.loadedDirections = false
    })
    .addCase(getCoin.fulfilled, (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.selectedCoin = action.payload
    })
    .addCase(getCoin.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
  },

})

export default coinSlice.reducer