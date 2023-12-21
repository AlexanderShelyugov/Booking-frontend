import { createSlice } from '@reduxjs/toolkit'
import { searchBy } from '../nominatim/query'

const initialState = {
    places: []
}

export const counterSlice = createSlice({
    name: 'locations-search-results',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchBy.fulfilled, (state, action) => {
            let places = action.payload.map((item) => {
                return {
                    id: item.place_id,
                    location: item.display_name
                }
            })
            state.places = places
        })
    },
})

export const searchByQuery = searchBy

export default counterSlice.reducer
