import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar'
import Board from './components/Board/Board'

class App extends Component {
  render() {

    return (
      <div>
        <Navbar />

        <Board />
      </div>
    );
  }
}

export default App;
