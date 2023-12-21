import { configureStore } from '@reduxjs/toolkit'
import locationSearchResultsSlice from './features/search/location-results'
import selectedLocationSlice from './features/search/selected-location'

export const store = configureStore({
    reducer: {
        locationResults: locationSearchResultsSlice,
        selectedLocation: selectedLocationSlice,
    },
})
