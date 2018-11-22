import React from 'react';
import { useState } from 'react';
import Welcome from './Welcome';
import BoardArea from './BoardArea';
import Results from './Results';

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
