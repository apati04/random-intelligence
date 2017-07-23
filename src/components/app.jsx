import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
// import Main from './main';
import QuizMaker from '../containers/quiz_maker';
import QuizList from '../containers/quiz_list';


export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <QuizMaker />
          <QuizList />
        </div>
      </MuiThemeProvider>
    );
  }
}
