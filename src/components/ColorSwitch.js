import React from 'react';
import { useState } from 'react';

const ColorSwitch = () => {
    const [color, setColor] = useState('');
    
    return(
        <div>
            <form className="color-switch">
                <div className="color" id="color1" onClick={e => setColor('#196127')}></div>
                <div className="color" id="color2" onClick={e => setColor('#239a3b')}></div>
                <div className="color" id="color3" onClick={e => setColor('#7bc96f')}></div>
                <div className="color" id="color4" onClick={e => setColor('#c6e48b')}></div>
                <div className="color" id="color5" onClick={e => setColor('#ebedf0')}></div>
            </form>
        </div>
    );
}

export default ColorSwitch;