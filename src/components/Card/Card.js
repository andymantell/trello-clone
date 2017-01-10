import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {title} = this.props

    return (
      <div className="card well">
        {title}
      </div>
    );
  }
}

export default Card;
