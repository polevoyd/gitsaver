import React from 'react';

const Results = (props) => {

    const downloadScript = () => {
        const blob = new Blob([bashScript], {type:'text/plain'});
        const downloadLink = document.createElement("a");
        downloadLink.download = 'gitsaver';
        if (window.webkitURL != null) {
            downloadLink.href = window.webkitURL.createObjectURL(blob);
        } else {
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.style.display = "none";
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }

    const indexToDate = (index) => {
        // TODO: refactor
        const previousYear = new Date().getFullYear()-1;
        const previousYearInSeconds = new Date().setFullYear(previousYear)
        const correctDate = new Date(previousYearInSeconds)
        const previousDay = correctDate.getDay();
        const correctDayInSeconds = correctDate.setDate(correctDate.getDate()-previousDay)
        const correctDay = new Date(correctDayInSeconds)
        const finalDateInSeconds = correctDay.setDate(correctDay.getDate() + index);
        const finalDate = new Date(finalDateInSeconds);
        return finalDate;
    }
    
    const scriptsArray = props.board
    .map((e, i) => {
        const date = indexToDate(i).toString();
        const scripts = new Array(e * 12).fill(date);
        return scripts;
    })
    .reduce((curr, acc) => {
        return curr ? acc.concat(curr) : acc;
    }, [])
    .map(e => `echo "|" >> README.md&&git add .&&git commit -m "gitsaver" --date="${e}"`)
    .join('&&');

    const bashScript =
    `#!/bin/bash
mkdir gitsaver_temp&&cd gitsaver_temp&&echo Paste link to repo:&&read link&&echo "|" >> README.md&&git init&&git add README.md&&${scriptsArray}&&git remote add origin $link&&git push origin master&&cd ..&&rm -r gitsaver_temp`;

    return(
        <div>
            <button onClick={downloadScript}>Download Script</button>
            <textarea className="results" readOnly value={bashScript}>
            </textarea>
        </div>
    );
}

export default Results;