import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from 'react-redux';
import axios from "axios";

const API_ADDRESS = 'https://www.deckofcardsapi.com/api/deck/'

const initialState = {
    deck_id: null,
    card: null,
    remainingCards: 0,
    isLoading: false,
    error: null
}

export const fetchDeckData = createAsyncThunk("deck/fetchDeckData", async () => {
    const response = await axios.get(`${API_ADDRESS}new/shuffle/?deck_count=1`);
    return response.data;
 });

 export const fetchDeckCard = createAsyncThunk("deck/fetchDeckCard", async (arg, { getState }) => {
    const deck_id = getState().deck.deck_id;
    const response = await axios.get(`${API_ADDRESS}${deck_id}/draw/?count=1`);
    return response.data;
 })

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
        builder.addCase(fetchDeckCard.pending, (state, action) => {
            return {...state, isLoading: true, error: null}
        })
        builder.addCase(fetchDeckCard.fulfilled, (state, action) => {
            const {cards, remaining} = action.payload;
            return {...state, card: cards[0], remainingCards: remaining, isLoading: false, error: null};
        })
        builder.addCase(fetchDeckCard.rejected, (state, action) => {
            return {...state, isError: true, error: action.error }
        })
    }
});

export const { reset } = deckSlice.actions;

export default deckSlice.reducer;