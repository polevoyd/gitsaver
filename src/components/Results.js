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
        const scripts = new Array(e * 12).fill(date);
        
        
        // const scrpt = `git add . && git commit -m 'gitsaver' --date='${date}'`
        
        // 0 - 0 contributions
        // 1 - 1 contribution
        // 2 - 13 contributions
        // 3 - 26 contributions
        // 4 - 39 contributions

        
        // console.log(startingDay())

        

        return scripts;
    })
    .reduce((curr, acc) => {
        return curr ? acc.concat(curr) : acc;
    }, [])
    .map(e => `echo "|" >> README.md && git add . && git commit -m "gitsaver" --date="${e}"`)
    .join('&&');


    // finally, we have an array of dates we need to commit
 
    const bashScript =
    `
    #!/bin/bash
    echo Paste link to repo: &&
    read link &&
    echo "|" >> README.md &&
    git init &&
    git add README.md &&
    ${scriptsArray} &&
    git remote add origin $link &&
    git push origin master
    `;

    return(
        <textarea className="results" readOnly value={bashScript}>
        </textarea>
    );
}

export default Results;