import React from 'react';
import Welcome from './Welcome';
import Board from './BoardArea';
import Results from './Results';

const App = () => {
    return(
      <div>
        <Welcome/>
        <Board />
        <Results />
      </div>
    );
}

export default App;
