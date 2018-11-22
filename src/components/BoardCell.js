import React from 'react';

const BoardCell = (props) => {

    const numToColor = num => {
        switch (num) {
            case 0:
                return '#ebedf0';
            case 1:
                return '#c6e48b';
            case 2: 
                return '#7bc96f';
            case 3:
                return '#239a3b';
            case 4:
                return '#196127';
            default:
                break;
        }    
    }
    // console.log(props)

    return(
        <div 
            style={{backgroundColor: numToColor(props.board[props.index])}}
            className={`board-cell ${props.index}`}
            onClick={e => props.updateBoard(props.index, props.color)}>
        </div>
    );
}

export default BoardCell;
