import { createSlice } from "@reduxjs/toolkit";

const sittingSlice = createSlice({
    name: "sitting",
    initialState: {
        language: JSON.parse(localStorage.getItem('language')) || 'English',
        theme: JSON.parse(localStorage.getItem('theme')) || 'light',
    },
    reducers: {
        setLanguage: {
            reducer: (state, {payload}) => {
                state.language = payload;
                localStorage.setItem('language', JSON.stringify(payload));
            },
        },
        setTheme: {
            reducer: (state, {payload}) => {
                state.theme = payload;
                localStorage.setItem('theme', JSON.stringify(payload));
            },
        },
    },
    extraReducers: {},
});

export const { setLanguage, setTheme } = sittingSlice.actions;

export default sittingSlice.reducer;
