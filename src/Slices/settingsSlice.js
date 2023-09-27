import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    started: false,
    instructionsExpanded: false,
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        startGame: (state) => {
            return {...state, started: true};
        },
        cancelGame: (state) => {
            return {...state, ...initialState};
        },
        expandInstructions: (state) => {
            return {...state, instructionsExpanded: true};
        },
        collapseInstructions: (state) => {
            return {...state, instructionsExpanded: false};
        }
    }
});

export const {  startGame, 
                cancelGame, 
                expandInstructions, 
                collapseInstructions, 
                } = settingsSlice.actions;

export default settingsSlice.reducer;