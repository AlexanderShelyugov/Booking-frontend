import { createSlice } from '@reduxjs/toolkit'
import { searchBy } from '../nominatim/query'

const initialState = {
    places: [
        { id: 1, location: 'Avenue 1' },
        { id: 2, location: 'Street 2' },
        { id: 3, location: 'Square 3' },
    ]
}

export const counterSlice = createSlice({
    name: 'locations-search-results',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(searchBy.fulfilled, (state, action) => {
            // Add user to the state array
            console.log(action)
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
