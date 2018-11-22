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

        console.log(b)


        return b;
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

    indexToDate(0);
    indexToDate(1);
    indexToDate(20);
    indexToDate(40);
    indexToDate(300);

    // console.log(scriptCalendar)

    return(
        <textarea className="results" defaultValue={props.board}>

        </textarea>
    );
}

export default Results;