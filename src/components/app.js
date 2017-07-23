import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          App
        </div>
      </MuiThemeProvider>
    );
  }
}
