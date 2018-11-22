import React from 'react';
import BoardCell from './BoardCell';

const Board = (props) => {

    const arrayOfCells = props.board.map((e,i) => {
        return(
            <BoardCell
                board={props.board}
                color={props.color}
                updateBoard={props.updateBoard}
                key={i}
                index={i}>
            </BoardCell>
        )
    })
    // console.log(props)
    
    return(
        <div className="board">
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;