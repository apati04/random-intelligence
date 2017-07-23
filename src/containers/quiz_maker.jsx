import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateQuiz } from '../actions/index';

class QuizMaker extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  // helper functions (methods);
  onInputChange(e){
    this.setState({ term: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.generateQuiz(this.state.term);
    this.setState({ term: '' });
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text"/>
        <span>
          <button type="Submit">GetQuiz</button>
        </span>
      </form>
    )
  }
}

export default connect(null, { generateQuiz })(QuizMaker);
