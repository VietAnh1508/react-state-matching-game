import React from 'react';
import './Button.css';

const Button = (props) => (
    <button onClick={() => props.startGame(36)}>
        {props.playing ? 'reset' : 'start'}
    </button>
);

export default Button;
