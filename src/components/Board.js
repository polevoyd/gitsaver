import React from 'react';
import BoardCell from './BoardCell';

const Board = () => {

    const arrayOfCells = new Array(52*7).fill(0).map((e,i) => <BoardCell key={i} index={i}></BoardCell>)
    
    const previousYear = new Date().getFullYear()-1;
    const inSeconds = new Date().setFullYear(previousYear)
    const start = new Date(inSeconds)

    const previousDay = start.getDay();
    const correctDay = start.setDate(start.getDate()-previousDay)
    const toDate = new Date(correctDay)




    console.log(toDate)
    
    return(
        <div className="board">
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;