import React from 'react';

const Results = (props) => {

    // props.board - array with 364 items with colors 1-4

    
    return(
        <textarea className="results" defaultValue={props.board}>

        </textarea>
    );
}

export default Results;