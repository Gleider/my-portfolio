import React, { Component } from 'react';
import './App.css';
import Left from './containers/Left'
import Right from './containers/Right'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Left /> */}
        <Right />
      </div>
    );
  }
}

export default App;
