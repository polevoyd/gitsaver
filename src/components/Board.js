import React from 'react';
import BoardCell from './BoardCell';

const Board = (props) => {

    const arrayOfCells = props.board.map((e,i) => {
        return(
            <BoardCell
                color={props.color}
                updateBoard={props.updateBoard}
                key={i}
                index={i}>
            </BoardCell>
        )
    })
    console.log(props)
    const previousYear = new Date().getFullYear()-1;
    const inSeconds = new Date().setFullYear(previousYear)
    const start = new Date(inSeconds)

    const previousDay = start.getDay();
    const correctDay = start.setDate(start.getDate()-previousDay)
    const toDate = new Date(correctDay)




    // console.log(toDate)
    
    return(
        <div className="board">
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;