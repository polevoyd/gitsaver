import React from 'react';
import Board from './Board';
import ColorSwitch from './ColorSwitch';

const BoardArea = (props) => {
    return(
        <div className="board-area">
            <Board/>
            <ColorSwitch setColor={props.setColor}/>
        </div>
    );
}

export default BoardArea;