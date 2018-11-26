import React from 'react';
import Board from './Board';
import ColorSwitch from './ColorSwitch';

const BoardArea = (props) => {
    return(
        <div className="board-area">
        <div className="options-wrapper">
            <div onClick={props.cleanBoard} className="options"></div>
            <div className="options"></div>
        </div>
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