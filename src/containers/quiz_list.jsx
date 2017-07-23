import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuizList extends Component {

  render() {
    console.log(this.state);
    console.log('props: ', this.props);
    return (
      <div>quizList</div>
    )
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}
export default connect(mapStateToProps)(QuizList);
