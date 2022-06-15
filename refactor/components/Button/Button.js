import React from 'react';
import './Button.css';

import GameContext from '../../GameContext';

const Button = () => (
    <GameContext.Consumer>
        {
            ({ playing, startGame }) => (
                <button onClick={() => startGame(36)}>
                    {playing ? 'reset' : 'start'}
                </button>
            )
        }
    </GameContext.Consumer>

);

export default Button;
