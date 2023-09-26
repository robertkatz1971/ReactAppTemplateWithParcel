import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    started: false,
    instructionsExpanded: false,
    deck_id: null,
    remainingCards: 0,
    isLoading: false,
    error: null
}

export const fetchDeckData = createAsyncThunk("game/fetchDeckData", async () => {
    const response = await axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return response.data;
 });

export const gameSlice = createSlice({
    name: 'game',
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDeckData.pending, (state, action) => {
            return {...state, isLoading: true, error: null}
        })
        builder.addCase(fetchDeckData.fulfilled, (state, action) => {
            const {remaining, deck_id} = action.payload;
            return {...state, remainingCards: remaining, deck_id: deck_id, isLoading: false, error: null};
        })
        builder.addCase(fetchDeckData.rejected, (state, action) => {
            return {...state, isError: true, error: action.error }
        })
    }
});

export const {  startGame, 
                cancelGame, 
                expandInstructions, 
                collapseInstructions, 
                } = gameSlice.actions;

export default gameSlice.reducer;