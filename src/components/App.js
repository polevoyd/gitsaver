import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome';
import BoardArea from './BoardArea';
import Results from './Results';
import Instructions from './Instructions';
import FAQ from './FAQ';

const App = () => {
  const currentColor = '#c6e48b'
  const currentBoard = new Array(52*7).fill(0);
  const faqIsOpened = false;

  const [color, setColor] = useState(currentColor)
  const [board, setBoard] = useState(currentBoard);
  const [faq, setFaq] = useState(faqIsOpened);

  const updateBoard = (index, value) => {
    let copy = board;
    copy[index] = value;
    setBoard(copy);
  }

  const switchFaq = () => {
    setFaq(!faq);
  }

  return(
    <div onClick={faq ? switchFaq : null}>
      <Welcome switchFaq={switchFaq} faqIsOn={faq}/>
      <BoardArea 
        board={board}
        color={color}
        setColor={setColor}
        updateBoard={updateBoard}/>
      <Results 
        board={board}/>
        <Instructions/>
        {faq ? <FAQ /> : null}
    </div>
  );
}

export default App;
