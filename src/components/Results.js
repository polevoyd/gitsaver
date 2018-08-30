import React from 'react';

const Results = (props) => {

    // props.board - array with 364 items with colors 1-4

    const indexToDate = (index) => {
        const previousYear = new Date().getFullYear()-1;
        const inSeconds = new Date().setFullYear(previousYear)
        const start = new Date(inSeconds)
        const previousDay = start.getDay();
        const correctDay = start.setDate(start.getDate()-previousDay)
        const toDate = new Date(correctDay)
        const a = toDate.setDate(toDate.getDate() + index);
        const b = new Date(a);

        // console.log(b)



        return b;
    }
    
    const scriptsArray = props.board.map((e, i) => {

        const date = indexToDate(i).toString();
        
        
        const scrpt = `git add . && git commit -m 'gitsaver' --date='${date.toString()}'`
        

        // 0 - 0 contributions
        // 1 - 13 contributions
        // 2 - 17
        // console.log(startingDay())


        return scrpt;
    })

    console.log(scriptsArray)

    return(
        <textarea className="results" defaultValue={props.board}>

        </textarea>
    );
}

export default Results;