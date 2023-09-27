import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    deck_id: null,
    remainingCards: 0,
    isLoading: false,
    error: null
}

export const fetchDeckData = createAsyncThunk("deck/fetchDeckData", async () => {
    const response = await axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return response.data;
 });

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        reset: (state) => {
            return {...state, ...initialState};
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

export const { reset } = deckSlice.actions;

export default deckSlice.reducer;