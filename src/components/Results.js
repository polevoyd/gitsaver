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

        // const c = b.setSeconds(b.getSeconds() + 1);
        // const d = new Date(c);
        // console.log(c)

        return b;
    }
    
    const scriptsArray = props.board.map((e, i) => {

        
        const date = indexToDate(i).toString();
        const scripts = new Array(e).fill(date);
        
        
        // const scrpt = `git add . && git commit -m 'gitsaver' --date='${date}'`
        
        // 0 - 0 contributions
        // 1 - 1 contribution
        // 2 - 13 contributions
        // 3 - 26 contributions
        // 4 - 39 contributions

        
        // console.log(startingDay())

        

        return scripts;
    }).reduce((curr, acc) => {
        return curr ? acc.concat(curr) : acc;
    }, [])

    // finally, we have an array of dates we need to commit
    console.log(scriptsArray)

    return(
        <textarea className="results" defaultValue={props.board}>

        </textarea>
    );
}

export default Results;