import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Main from './main';
import axios from 'axios';


export default class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     results: '',
     actualQuestion: ''
   };
 }

 componentWillMount() {
   console.log('component ready');
   axios.get("https://opentdb.com/api.php?amount=10&type=multiple").then(({data}) => {
    var { results } = data;
    this.setState({ results });
   });
 }

  render() {
    const { results } = this.state;
    console.log('app: ', results)
    if(!results) {
      return(<div>wait</div>)
    }
    

    return (
      <MuiThemeProvider>
        <div>
            <AppBar
              title="Random Quiz Game"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Main data={results[0]}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
