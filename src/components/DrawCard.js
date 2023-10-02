import React, { useEffect } from 'react';
import Card from './Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeckCard } from "../Slices/deckSlice";

const DrawCard = () => {

    const gameStarted = useSelector((state) => state.settings.started);
    const deckId = useSelector((state) => state.deck.deck_id);
    const card = useSelector((state) => state.deck.card);

    useEffect(() => {
        if (deckId) {
            dispatch(fetchDeckCard());
        }
    }, [deckId])

    const onButtonClick = () => {
        dispatch(fetchDeckCard());
    }

    const dispatch = useDispatch();

    if (!gameStarted) return null;

    return (
        <div>
            <Card card={card} />
            <hr />
            <button onClick={onButtonClick}>Draw the next card!</button>
        </div>
    )
}

export default DrawCard;