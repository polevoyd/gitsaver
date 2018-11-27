import React from 'react';

const ExamplesBoard = (props) => {
    const example1 = new Array(52*7).fill(0);
    const example2 = new Array(52*7).fill(0);
    const example3 = new Array(52*7).fill(0);
    const example4 = new Array(52*7).fill(0);
    const example5 = new Array(52*7).fill(0);
    const exampleBoards = [example1, example2, example3, example4, example5];

    return(
        <div className="examples-board">
            <div onClick={e => props.setBoardExample(exampleBoards[e.target.textContent-1])} className="example-preview">1</div>
            <div onClick={e => props.setBoardExample(exampleBoards[e.target.textContent-1])} className="example-preview">2</div>
            <div onClick={e => props.setBoardExample(exampleBoards[e.target.textContent-1])} className="example-preview">3</div>
            <div onClick={e => props.setBoardExample(exampleBoards[e.target.textContent-1])} className="example-preview">4</div>
            <div onClick={e => props.setBoardExample(exampleBoards[e.target.textContent-1])} className="example-preview">5</div>
        </div>
    );
}

export default ExamplesBoard;