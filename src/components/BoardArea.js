import React from 'react';
import Board from './Board';
import ColorSwitch from './ColorSwitch';

const BoardArea = (props) => {

    return(
        <div className="board-area">
        <div className="options-wrapper">
            <p onClick={props.cleanBoard} className="options">clean</p>
            <p onClick={props.switchSamples} className="options">examples</p>
        </div>
            <Board
                color={props.color}
                board={props.board}
                updateBoard={props.updateBoard}
                mouseState={props.mouseState}
                changeMouseState={props.changeMouseState}/>
            <ColorSwitch 
                setColor={props.setColor}
                color={props.color}/>
        </div>
    );
}

export default BoardArea;