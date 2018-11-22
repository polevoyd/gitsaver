import React from 'react';
import { useState } from 'react';

const ColorSwitch = () => {
    const [color, setColor] = useState('');
    return(
        <div>
            <form className="color-switch">
                <div className="color" id="color1"></div>
                <div className="color" id="color2"></div>
                <div className="color" id="color3"></div>
                <div className="color" id="color4"></div>
                <div className="color" id="color5"></div>
            </form>
        </div>
    );
}

export default ColorSwitch;