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

    const colorToNum = color => {
        switch (color) {
            case '#ebedf0':
                return 0;
            case '#c6e48b':
                return 1;
            case '#7bc96f': 
                return 2;
            case '#239a3b':
                return 3;
            case '#196127':
                return 4;
            default:
                break;
        }    
    }

    // trigger beginning of mouse hold
    const mouseHoldStart = e => {
        e.preventDefault()
        e.stopPropagation()
        props.changeMouseState(true)
    }

    return(
        <div 
            style={{backgroundColor: numToColor(props.board[props.index])}}
            className={`board-cell ${props.index}`}
            onMouseEnter={e => props.mouseState ? props.updateBoard(props.index, colorToNum(props.color)) : null}
            onClick={e => props.updateBoard(props.index, colorToNum(props.color))}
            onMouseDown={e => mouseHoldStart(e)}>
        </div>
    );
}

export default BoardCell;
