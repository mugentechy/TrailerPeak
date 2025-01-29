import { createSlice } from '@reduxjs/toolkit'
import { fetchMagnetData } from './magnetActions';

const initialState = {
    isLoading: false,
    error: null,
    magnet:null,
  
};

const magnetSlice = createSlice({
    name: 'magent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMagnetData.pending, (state) => {
                state.isLoading = 'true';
            })
            .addCase(fetchMagnetData.fulfilled, (state, { payload }) => {
                state.isLoading = 'false';
                state.magnet = payload
            })
            .addCase(fetchMagnetData.rejected, (state, { payload }) => {
                state.isLoading = 'false';
                state.error = payload;
            });
    },
});

export default magnetSlice.reducer;
