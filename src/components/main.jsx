import React, { Component } from 'react';
import Question from './question';
import axios from 'axios';

export default class Main extends Component {
  render() {
    return(
      <div>
        <h1>Quiz Game
        </h1>
        <Question content="How is it going?" />
      </div>
    )
  }
}