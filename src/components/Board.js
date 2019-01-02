import React from 'react';
import BoardCell from './BoardCell';

const Board = (props) => {
    
    const arrayOfCells = props.board.map((e,i) => {
        return(
            <BoardCell
                board={props.board}
                color={props.color}
                updateBoard={props.updateBoard}
                key={i.toString() + e.toString()}
                index={i}
                mouseState={props.mouseState}
                changeMouseState={props.changeMouseState}>
            </BoardCell>
        )
    })

    // end of mouse hold 
    const mouseHoldEnd = e => props.changeMouseState(false);
    
    return(
        <div className="board" onMouseUp={e => mouseHoldEnd(e)}>
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;