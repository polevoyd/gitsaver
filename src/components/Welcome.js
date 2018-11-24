import React from 'react';

const Welcome = (props) => {
    return(
        <div className="welcome">
            <h4 className="changing-colors">gitsaver</h4> 
            <p>
                A screensaver for your github calendar.
            </p>
            <button onClick={props.switchFaq} className="button-faq">FAQ</button>
        </div>
    );
}

export default Welcome;
