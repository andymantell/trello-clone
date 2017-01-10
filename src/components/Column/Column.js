import React, { Component } from 'react';

import Card from '../Card/Card'

class Column extends Component {
  render() {
    const style = {
      minWidth: '20%',
      marginLeft: '20px'
    }

    return (
      <div className="column" style={style}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Column;
