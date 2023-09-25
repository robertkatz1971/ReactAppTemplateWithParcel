import React from 'react';
import Instructions from './Instructions';
import Game from './Game';

const App = () => {

    return (    
        <div>
            <h2>♠ ♣ Evens or Odds ♦ ♥</h2>
            <Game />
            <Instructions /> 
        </div>
    );
}

export default App;