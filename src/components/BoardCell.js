import React from 'react';

const BoardCell = (props) => {
    return(
        <div className={`board-cell ${props.index}`}></div>
    );
}

export default BoardCell;