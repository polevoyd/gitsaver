import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome';
import BoardArea from './BoardArea';
import Results from './Results';
import Instructions from './Instructions';
import FAQ from './FAQ';
import ExamplesBoard from './ExamplesBoard';

const App = () => {
  const currentColor = '#c6e48b'
  const currentBoard = new Array(52*7).fill(0);
  const faqIsOpened = false;
  const samplesIsOpened = false;

  const [color, setColor] = useState(currentColor)
  const [board, setBoard] = useState(currentBoard);
  const [faq, toggleFaq] = useState(faqIsOpened);
  const [samples, toggleSamples] = useState(samplesIsOpened);

  const updateBoard = (index, value) => {
    let copy = board;
    copy[index] = value;;
    return setBoard(copy);
  }

  const cleanBoard = () => {
    const defaultBoard = new Array(52*7).fill(0);
    return (setBoard(defaultBoard));
  }

  const setBoardExample  = (newBoard) => {
    return setBoard(newBoard);
  }

  const switchFaq = () => {
    return toggleFaq(!faq);
  }

  const switchSamples = () => {
    return toggleSamples(!samples);
  }

  const closeAllWindows = () => {
    toggleFaq(false);
    toggleSamples(false);
  }

  return(
    <div onClick={faq || samples ? closeAllWindows : null}>
      <Welcome switchFaq={switchFaq} faqIsOn={faq}/>
      <BoardArea 
        board={board}
        color={color}
        setColor={setColor}
        updateBoard={updateBoard}
        cleanBoard={cleanBoard}
        switchSamples={switchSamples}/>
      <Results 
        board={board}/>
        <Instructions/>
        {faq ? <FAQ /> : null}
        {samples ? <ExamplesBoard setBoardExample={setBoardExample}/> : null}
    </div>
  );
}

export default App;
