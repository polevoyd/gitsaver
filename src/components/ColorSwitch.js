import React from 'react';

const ColorSwitch = () => {
   
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

/*
onClick={e => setColor('#196127')}
onClick={e => setColor('#239a3b')}
onClick={e => setColor('#7bc96f')}
onClick={e => setColor('#c6e48b')}
onClick={e => setColor('#ebedf0')}
 */