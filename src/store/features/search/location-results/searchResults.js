import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    places: [
        {id: 1, location: 'Avenue 1'},
        {id: 2, location: 'Street 2'},
        {id: 3, location: 'Square 3'},
    ]
}

export const counterSlice = createSlice({
    name: 'locations-search-results',
    initialState,
    reducers: {
        addPlace: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
    },
})

// Action creators are generated for each case reducer function
export const { addPlace } = counterSlice.actions

export default counterSlice.reducer
