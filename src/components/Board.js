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
                index={i}>
            </BoardCell>
        )
    })

    const mouseHoldStart = e => {
        e.preventDefault()
        e.stopPropagation()
        props.changeMouseState(true)
        console.log('beginning of event')
    }

    const mouseHoldEnd = e => props.changeMouseState(false)
    
    return(
        <div className="board" onMouseDown={e => mouseHoldStart(e)} onMouseUp={e => mouseHoldEnd(e)}>
            <ul className="squares">
                {arrayOfCells}
            </ul> 
        </div>
    );
}

export default Board;