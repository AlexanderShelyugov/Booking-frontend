import { configureStore } from '@reduxjs/toolkit'
import locationSearchResultsSlice from './features/search/location-results/searchResults'

export const store = configureStore({
    reducer: {
        locationResults: locationSearchResultsSlice
    },
})
