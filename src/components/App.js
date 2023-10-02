import React from 'react';
import Instructions from './Instructions';
import Game from './Game';
import DrawCard from './DrawCard';

const App = () => {

    return (    
        <div>
            <h2>♠ ♣ Evens or Odds ♦ ♥</h2>
            <Game />
            <DrawCard />
            <Instructions /> 
        </div>
    );
}

export default App;