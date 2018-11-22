import React from 'react';
import { useState } from 'react';

const ColorSwitch = () => {
    const [color, setColor] = useState('');
    return(
        <div>
            <form className="color-switch">
                <div className="radio" id="radio1" onClick={e => console.log(e.target)}></div>
                <div className="radio" id="radio2"></div>
                <div className="radio" id="radio3"></div>
                <div className="radio" id="radio4"></div>
                <div className="radio" id="radio5"></div>
            </form>
        </div>
    );
}

export default ColorSwitch;