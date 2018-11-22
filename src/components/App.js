import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome';
import BoardArea from './BoardArea';
import Results from './Results';

const App = () => {
  const boardColors = ''

  const [color, setColor] = useState(boardColors)
    

    return(
      <div>
        <Welcome/>
        <BoardArea boardColors={boardColors}/>
        <Results />
      </div>
    );
}

export default App;
