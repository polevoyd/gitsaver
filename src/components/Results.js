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


        console.log(toDate)


        return toDate;
    }
    
    // const scriptCalendar = props.board.map((e, i) => {

    //     const startDate = indexToDate();
    //     const day = {
    //         // i - days offset from starting day
    //         // e - intensity of colors (number to amount of commits)

    //     }

    //     // console.log(startingDay())

    //     return e;
    // })


    // console.log(scriptCalendar)

    return(
        <textarea className="results" defaultValue={props.board}>

        </textarea>
    );
}

export default Results;