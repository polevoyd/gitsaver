import React from 'react';

const Welcome = (props) => {
    const buttonColor = (props) => {
        return props.faqIsOn ? {backgroundColor: '#d10000'} : {backgroundColor: '#89c403'};
    }
    
    return(
        <div 
        className="welcome">
            <h4 className="changing-colors">gitsaver</h4> 
            <p>
                A screensaver for your github calendar.
            </p>
            <button 
                onClick={props.switchFaq}
                className="button-faq" 
                style={buttonColor(props)}>
            FAQ
            </button>
        </div>
    );
}

export default Welcome;
