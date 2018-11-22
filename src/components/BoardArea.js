import React from 'react';
import Board from './Board';
import ColorSwitch from './ColorSwitch';

const BoardArea = (props) => {
    return(
        <div className="board-area">
            <Board
                board={props.board}
                setCell={props.setCell}/>
            <ColorSwitch 
                setColor={props.setColor}/>
        </div>
    );
}

export default BoardArea;