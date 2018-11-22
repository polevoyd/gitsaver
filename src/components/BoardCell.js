import React from 'react';

const BoardCell = (props) => {
    
    console.log(props)

    return(
        <div 
            style={{backgroundColor: props.color}}
            className={`board-cell ${props.index}`}
            onClick={e => props.updateBoard(props.index, props.color)}>
        </div>
    );
}

export default BoardCell;