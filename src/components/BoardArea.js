import React from 'react';
import Board from './Board';
import ColorSwitch from './ColorSwitch';

const BoardArea = (props) => {
    return(
        <div className="board-area">
            <Board
                color={props.color}
                board={props.board}
                updateBoard={props.updateBoard}/>
            <ColorSwitch 
                setColor={props.setColor}/>
        </div>
    );
}

export default BoardArea;