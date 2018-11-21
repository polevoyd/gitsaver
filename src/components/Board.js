import React from 'react';
import BoardCell from './BoardCell';

const Board = () => {

    const arrayOfCells = new Array(54).fill(0).map(e => <BoardCell></BoardCell>)
    console.log(arrayOfCells)
    return(
        <div className="board">
            {/* loop that renders full board  */}
            
            {arrayOfCells}
        </div>
    );
}

export default Board;