import React from 'react';
import BoardCell from './BoardCell';

const Board = () => {

    const arrayOfCells = new Array(54);
    return(
        <div className="board">
            {/* loop that renders full board  */}
            {arrayOfCells.map(e => <BoardCell/>)}
            <BoardCell/>
        </div>
    );
}

export default Board;