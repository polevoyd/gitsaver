import React from 'react'
import { useState } from 'react'
import Welcome from './Welcome'
import BoardArea from './BoardArea'
import Results from './Results'
import Instructions from './Instructions'
import FAQ from './FAQ'
import ExamplesBoard from './ExamplesBoard'

const App = () => {
  const currentColor = '#c6e48b'
  const currentBoard = new Array(52*7).fill(0)
  const faqIsOpened = { default: true, opened: false }
  const samplesIsOpened = false
  const mouseIsActive = false

  const [color, setColor] = useState(currentColor)
  const [board, setBoard] = useState(currentBoard)
  const [faq, toggleFaq] = useState(faqIsOpened)
  const [samples, toggleSamples] = useState(samplesIsOpened)
  const [mouseState, toggleMouse] = useState(mouseIsActive)

  const updateBoard = (index, value) => {
    let copy = board
    copy[index] = value
    return setBoard(copy)
  }

  const cleanBoard = () => {
    const defaultBoard = new Array(52*7).fill(0);
    return (setBoard(defaultBoard));
  }

  const setBoardExample  = (newBoard) => {
    return setBoard(newBoard);
  }

  const switchFaq = () => {
    return toggleFaq({ default: false, opened: !faq.opened});
  }

  const switchSamples = () => {
    return toggleSamples(!samples);
  }

  const closeAllWindows = () => {
    toggleFaq(false);
    toggleSamples(false);
  }

  const changeMouseState = (state) => {
    return toggleMouse(state)
  }

  return(
    <div onClick={faq.opened || samples ? closeAllWindows : null}
    >
      <Welcome switchFaq={switchFaq} faqIsOn={faq.opened}/>
      {/* <textarea className="test" value={board}></textarea> */}
      <BoardArea 
        board={board}
        color={color}
        setColor={setColor}
        updateBoard={updateBoard}
        cleanBoard={cleanBoard}
        switchSamples={switchSamples}
        mouseState={mouseState}
        changeMouseState={changeMouseState}
        />
      <Results board={board}/>
        <Instructions/>
        <FAQ faq={faq}/>
        {samples ? <ExamplesBoard setBoardExample={setBoardExample}/> : null}
    </div>
  );
}

export default App;
