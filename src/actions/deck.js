import { FETCH_DECK_RESULT } from "./types";

export const fetchDeckResult = (deckJson) => {

    const { remaining, deck_id} = deckJson;

    return { 
                type: FETCH_DECK_RESULT, 
                remaining, 
                deck_id  
           };
}

export const fetchNewDeck = () => {
    const dispatch = useDispatch();

    return fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then((response) => response.json())
        .then((json) => dispatch(fetchDeckResult(json)))
        .catch(error => console.error('fetchDeckError', error))
}