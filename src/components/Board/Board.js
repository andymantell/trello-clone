import React, { Component } from 'react';

import Column from '../Column/Column'

class Board extends Component {
  render() {
    const style = {
      display: 'flex'
    }

    return (
      <div className="board row" style={style}>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}

export default Board;
