import React from 'react';
import Welcome from './Welcome';
import Board from './BoardArea';

class App extends React.Component {
  render(){
    return(
      <div>
        <Welcome/>
        <Board />
      </div>
    );
  }
}

export default App;
