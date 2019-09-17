import React, { Component } from 'react';
import Die from './Die.js';
import './RollDice.css';

class RollDice extends Component {
  render() {
    return (
      <div className="RollDice-container">
        <div><Die /></div>
        <div><Die /></div>
      </div>
    );
  }
}

export default RollDice;