import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGame, cancelGame, fetchDeckData } from '../Slices/gameSlice';

const Game = () => {

    const onStartGame = () => {
        dispatch(startGame());
        dispatch(fetchDeckData());
    }

    const gameStarted = useSelector((state) => state.game.started);
    const dispatch = useDispatch();

    const element = gameStarted ? <div>Game Running</div> : <div>Game Not Running</div>;

    const onClickHandler = () => {
        gameStarted ?  dispatch(cancelGame()) : onStartGame();
    };

    return (
        <>
            {element}
            <button onClick={onClickHandler}>{gameStarted ? 'End' : 'Start'}</button>
        </>
    );
}

export default Game;