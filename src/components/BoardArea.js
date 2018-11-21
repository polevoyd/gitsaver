import React from 'react';
import Board from './Board';
import ColorSwitch from './ColorSwitch';

const BoardArea = () => {
    return(
        <div className="board-area">
            <Board/>
            <ColorSwitch />
        </div>
    );
}

export default BoardArea;