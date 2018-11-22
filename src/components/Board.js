import React from 'react';
import BoardCell from './BoardCell';

const Board = () => {

    const arrayOfCells = new Array(54*7).fill(0).map(e => <BoardCell></BoardCell>)
    return(
        <div className="board">
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;