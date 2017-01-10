import React, { Component } from 'react';

import Column from '../Column/Column'

class Board extends Component {
  constructor(props) {
    super(props)

    this.state = {
      columns: [
        {
          title: 'Foo',
          id: 'foo',
          cards: [
            {
              id: 1,
              title: 'Foo'
            },
            {
              id: 2,
              title: 'Bar'
            },
            {
              id: 3,
              title: 'Wibble'
            }
          ]
        },
        {
          title: 'React',
          id: 'react',
          cards: [
            {
              id: 4,
              title: 'React'
            },
            {
              id: 5,
              title: 'Is'
            },
            {
              id: 6,
              title: 'Fun'
            },
            {
              id: 7,
              title: 'So far... :-)'
            }
          ]
        }
      ]
    }
  }
  render() {
    const style = {
      display: 'flex'
    }

    var columns = this.state.columns.map((column) =>
      <Column key={column.id} title={column.title} id={column.id} cards={column.cards} />
    )

    return (
      <div className="board row" style={style}>
        {columns}
      </div>
    );
  }
}

export default Board;
