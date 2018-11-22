import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome';
import BoardArea from './BoardArea';
import Results from './Results';

const App = () => {
  const currentColor = '#ebedf0'
  const currentBoard = new Array(52*7).fill(0);

  const [color, setColor] = useState(currentColor)
  const [board, setCell] = useState(currentBoard);

  const updateBoard = (index, value) => {

    
    let copy = board;
    copy[index] = value;
    console.log(index, value);
    // setCell(board[index] = value)
  }

    return(
      <div>
        <Welcome/>
        <BoardArea 
          board={board}
          color={color}
          setColor={setColor}
          updateBoard={updateBoard}/>
        <Results />
      </div>
    );
}

export default App;
