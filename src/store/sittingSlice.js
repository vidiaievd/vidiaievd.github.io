import { createSlice } from "@reduxjs/toolkit";

const sittingSlice = createSlice({
    name: "sitting",
    initialState: {
        language: JSON.parse(localStorage.getItem('language')) || 'en-US',
        theme: JSON.parse(localStorage.getItem('theme')) || 'light',
    },
    reducers: {
        language: {
            reducer: (state, { payload }) => {
                state.language = payload;
                localStorage.setItem('language', JSON.stringify(payload));
            },
        },
        theme: {
            reducer: (state, { payload }) => {
                state.theme = payload;
                localStorage.setItem('theme', JSON.stringify(payload));
            },
        },
    },
    extraReducers: {},
});

export const reducers = sittingSlice.actions;

export default sittingSlice.reducer;
