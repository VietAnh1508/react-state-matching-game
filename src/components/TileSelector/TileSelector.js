import React from 'react';
import './TileSelector.css';

import useHover from '../../hooks';

const TileSelector = (props) => {

  const [ref, hovered] = useHover();

  const numOfTiles = [4, 16, 36];

  const dropdown = hovered ? (
    <div className='tileSelectorContent'>
      {
        numOfTiles.map((num, idx) =>
          <div key={idx} className='number' onClick={() => props.handleNumTileChange(num)}>{num}</div>
        )
      }
    </div>
  ) : null;

  return (
    <div className='tileSelector'>
      <div>Number of Tiles</div>
      <div className='tileSelectorDropdown' ref={ref}>
        {props.numTiles}
        {dropdown}
      </div>
    </div>
  );
};

export default TileSelector;
