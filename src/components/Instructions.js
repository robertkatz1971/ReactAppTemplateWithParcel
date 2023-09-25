import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../Slices/gameSlice';

const Instructions = () => {

    const instructionsExpanded = useSelector((state) => state.game.instructionsExpanded);
    const gameStarted = useSelector((state) => state.game.started);
    const dispatch = useDispatch();

    if (gameStarted) return null;

    const onClickHandler = () => {
        instructionsExpanded ?  dispatch(collapseInstructions()) : dispatch(expandInstructions());
    }

    return (    
        <div>
            <h3>Instructions</h3>
            {instructionsExpanded ? 
                <>
                    <p>Welcome to evens or odds. The game goes like this</p>
                    <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                    <p>Make a choice on every draw, and see how many you get right!</p>
                    <p>(Face cards don't count)</p>
                </>
            :
                <>
                    <p>You know the rules.</p>
                </>
            }
            <button onClick={onClickHandler}>{instructionsExpanded ? 'Show less' : 'Read more'}</button>
        </div>
    );

}

export default Instructions;