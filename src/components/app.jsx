import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Main from './main';



export default class App extends Component {
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
