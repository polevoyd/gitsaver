import React from 'react';

const ColorSwitch = (props) => {
   
    return(
        <div className="color-switch-area">
            <form className="color-switch">
                <div className="color" id="color1" onClick={e => props.setColor('#196127')}></div>
                <div className="color" id="color2" onClick={e => props.setColor('#239a3b')}></div>
                <div className="color" id="color3" onClick={e => props.setColor('#7bc96f')}></div>
                <div className="color" id="color4" onClick={e => props.setColor('#c6e48b')}></div>
                <div className="color" id="color5" onClick={e => props.setColor('#ebedf0')}></div>
            </form>
        </div>
    );
}

export default ColorSwitch;
