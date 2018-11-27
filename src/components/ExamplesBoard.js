import React from 'react';

const ExamplesBoard = (props) => {
    const example1 = [0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,1,0,4,3,2,1,0,0,1,4,3,2,1,0,0,1,4,3,2,1,1,1,1,4,3,2,1,0,0,1,4,3,2,1,0,1,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,1,4,3,2,1,1,1,1,4,3,2,1,1,0,1,4,3,2,1,0,0,1,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,1,0,4,3,2,1,0,0,1,4,3,2,1,1,1,1,4,3,2,1,0,0,1,4,3,2,1,0,1,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,1,0,1,4,3,2,1,1,0,1,4,3,2,1,1,1,1,4,3,2,1,0,0,1,4,3,2,1,0,0,1,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1,0,0,0,4,3,2,1];
    const example2 = [0,0,0,0,0,2,4,0,0,0,0,2,2,4,0,2,2,0,0,2,4,1,2,3,0,0,2,4,2,2,3,2,2,2,4,2,3,2,0,0,2,4,0,2,3,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,2,2,4,0,0,0,2,0,2,4,0,0,2,1,2,2,4,0,0,3,1,2,2,4,0,0,2,3,2,2,4,0,0,0,1,0,2,4,0,0,0,0,0,2,4,0,0,0,0,2,2,4,0,0,0,0,2,2,4,0,0,0,3,2,2,4,0,0,0,3,2,2,4,0,0,0,0,2,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,2,2,4,3,3,0,0,2,2,4,2,3,0,0,0,2,4,1,2,2,2,2,2,4,3,2,0,0,0,2,4,2,1,0,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,2,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,2,0,2,0,2,4,3,2,2,2,0,2,4,2,3,3,2,2,2,4,2,3,2,2,0,2,4,0,2,0,2,0,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,0,0,0,1,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4,0,0,3,2,0,2,4,0,2,2,3,0,2,4,2,2,1,2,2,2,4,0,2,1,2,0,2,4,0,0,1,2,0,2,4,0,0,0,0,0,2,4,0,0,0,0,0,2,4];
    const example3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3,0,0,0,0,0,1,3,0,0,0,0,0,3,3,4,4,4,4,0,3,3,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,3,0,0,3,0,3,0,3,0,0,3,0,3,3,3,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,3,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,3,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,0,0,3,0,0,3,0,0,0,3,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,3,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,3,3,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,3,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,3,0,3,0,0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,3,0,0,0,3,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0,3,0];
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