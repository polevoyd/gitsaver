import React from 'react';

const ColorSwitch = (props) => {
    
   const setOrangeOutline = (color) => {
    // clean previous outline and set a new one
    const cleanOutlines = Array.from(document.getElementsByClassName('color')).forEach(e => e.style.outline = 'none')
    if (color === '#ebedf0') document.getElementById('color5').style.outline = '1px solid orange'
    if (color === '#c6e48b') document.getElementById('color4').style.outline = '1px solid orange'
    if (color === '#7bc96f') document.getElementById('color3').style.outline = '1px solid orange'
    if (color === '#239a3b') document.getElementById('color2').style.outline = '1px solid orange'
    if (color === '#196127') document.getElementById('color1').style.outline = '1px solid orange' 
   }

    return(
        <div className="color-switch-area">
            <form className="color-switch">
                <div className="color" id="color1" onClick={e => {props.setColor('#196127'); setOrangeOutline('#196127')}}></div>
                <div className="color" id="color2" onClick={e => {props.setColor('#239a3b'); setOrangeOutline('#239a3b')}}></div>
                <div className="color" id="color3" onClick={e => {props.setColor('#7bc96f'); setOrangeOutline('#7bc96f')}}></div>
                <div className="color" id="color4" onClick={e => {props.setColor('#c6e48b'); setOrangeOutline('#c6e48b')}}></div>
                <div className="color" id="color5" onClick={e => {props.setColor('#ebedf0'); setOrangeOutline('#ebedf0')}}></div>
            </form>
        </div>
    );
}

export default ColorSwitch;
