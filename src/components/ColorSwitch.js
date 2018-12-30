import React from 'react';

const ColorSwitch = (props) => {
   const colorOrderNumber = (color, num) => {
       
        //    case '#ebedf0': return 5;
        //    case '#c6e48b': return 4;
        //    case '#7bc96f': return 3;
        //    case '#239a3b': return 2;
        //    case '#196127': return 1;
        //    default:
        //        break;
       

       
   }

   const getIdNumOfButton = e => e.target.id[e.target.id.length-1]


   const orangeFrame = { outline: '1px solid orange' }


//    console.log(colorOrderNumber(props.color))
    return(
        <div className="color-switch-area">
            <form className="color-switch">
                <div className="color" id="color1" onClick={e => {props.setColor('#196127'); console.log(getIdNumOfButton(e))}}></div>
                <div className="color" id="color2" onClick={e => props.setColor('#239a3b')}></div>
                <div className="color" id="color3" onClick={e => props.setColor('#7bc96f')}></div>
                <div className="color" id="color4" onClick={e => props.setColor('#c6e48b')}></div>
                <div className="color" id="color5" onClick={e => props.setColor('#ebedf0')}></div>
            </form>
        </div>
    );
}

export default ColorSwitch;
