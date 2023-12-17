import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const searchBy = createAsyncThunk(
    'nominatim/search',
    async (query, thunkAPI) => {
        const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&polygon_kml=1`
        const response = await axios.get(url)
        return response.data
    }
)