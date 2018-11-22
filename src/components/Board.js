import React from 'react';
import BoardCell from './BoardCell';

const Board = () => {

    const arrayOfCells = new Array(52*7).fill(0).map((e,i) => <BoardCell key={i} index={i}></BoardCell>)
    
    const year = new Date().getFullYear()-1;
    const inSeconds = new Date().setFullYear(year)
    const start = new Date(inSeconds)







    console.log(start)
    
    return(
        <div className="board">
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;