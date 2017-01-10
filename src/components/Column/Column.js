import React, { Component } from 'react';

import Card from '../Card/Card'

class Column extends Component {
  render() {
    const style = {
      minWidth: '20%',
      marginLeft: '20px'
    }

    const { title } = this.props

    var cards = this.props.cards.map((card) =>
      <Card key={card.id} title={card.title} id={card.id} />
    )

    return (
      <div className="column panel panel-default" style={style}>
        <h2 className="panel-heading">{title}</h2>

        <div className="panel-body">
          {cards}
        </div>
      </div>
    );
  }
}

export default Column;
