import { createSlice } from '@reduxjs/toolkit'

const selectedLocationSlice = createSlice({
    name: 'selectedLocationDetail',
    initialState: {
        id: null,
        title: 'Unknown',
        description: ''
    },
    reducers: {
        setNewLocation(state, action) {
            state.selectedLocation = action.payload
        },
        clearLocation(state, action) {
            state.selectedLocation = null
        },
    },
})

const { actions, reducer } = selectedLocationSlice

export const { setNewLocation, clearLocation } = actions

export default reducer