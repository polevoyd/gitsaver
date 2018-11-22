import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome';
import Board from './BoardArea';
import Results from './Results';
import BoardArea from './BoardArea';

const App = () => {
  
  const [color, setColor] = useState('');

    return(
      <div>
        <Welcome/>
        <BoardArea />
        <Results />
      </div>
    );
}

export default App;
