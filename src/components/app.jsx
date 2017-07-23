import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Main from './main';
import axios from 'axios';



export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 componentWillMount() {
   console.log('component ready');
 }
  render() {
    return (
      <MuiThemeProvider>
        <div>
            <AppBar
              title="Random Quiz Game"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}
