import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGame, cancelGame } from '../Slices/settingsSlice';
import { fetchDeckData, reset } from "../Slices/deckSlice";

const Game = () => {

    const onStartGame = () => {
        dispatch(startGame());
        dispatch(fetchDeckData());
    }

    const onEndGame = () => {
        dispatch(cancelGame());
        dispatch(reset());
    }

    const deck = useSelector((state) => state.deck);
    const settings = useSelector((state) => state.settings);
    const dispatch = useDispatch();

    const element = settings.started ? <div>Game Running</div> : <div>Game Not Running</div>;

    const onClickHandler = () => {
        settings.started ?  onEndGame() : onStartGame();
    };

    return (
        <>
            {deck.error ? <div>Please try reloading the application and error occurred ({deck.error.message}).</div> : element}
            <button onClick={onClickHandler}>{settings.started ? 'End' : 'Start'}</button>
        </>
    );
}

export default Game;