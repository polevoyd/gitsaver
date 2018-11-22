import React from 'react';

const Results = (props) => {

    console.log(props)
    return(
        <textarea className="results" defaultValue={props.board}>

        </textarea>
    );
}

export default Results;