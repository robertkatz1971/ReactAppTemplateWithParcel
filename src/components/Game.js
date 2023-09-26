import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { startGame, cancelGame, fetchDeckData } from '../Slices/gameSlice';

const Game = () => {

    const onStartGame = () => {
        dispatch(startGame());
        dispatch(fetchDeckData());
    }

    const game = useSelector((state) => state.game);
    const dispatch = useDispatch();

    const element = game.started ? <div>Game Running</div> : <div>Game Not Running</div>;

    const onClickHandler = () => {
        game.started ?  dispatch(cancelGame()) : onStartGame();
    };

    return (
        <>
            {game.error ? <div>{game.error.message}</div> : element}
            <button onClick={onClickHandler}>{game.started ? 'End' : 'Start'}</button>
        </>
    );
}

export default Game;