import React from 'react';
import './TileSelector.css';

import GameContext from '../../GameContext';

import useHover from '../../hooks';

const TileSelector = (props) => {

  const [ref, hovered] = useHover();

  const numOfTiles = [4, 16, 36];

  return (
    <GameContext.Consumer>
      {
        ({ numTiles, handleNumTileChange }) => {
          const dropdown = hovered ? (
            <div className='tileSelectorContent'>
              {
                numOfTiles.map((num, idx) =>
                  <div key={idx} className='number' onClick={() => handleNumTileChange(num)}>{num}</div>
                )
              }
            </div>
          ) : null;

          return (
            <div className='tileSelector'>
              <div>Number of Tiles</div>
              <div className='tileSelectorDropdown' ref={ref}>
                {numTiles}
                {hovered && (
                  <div className='tileSelectorContent'>
                    {dropdown}
                  </div>
                )}
              </div>
            </div>
          );
        }
      }
    </GameContext.Consumer>
  );
};

export default TileSelector;
