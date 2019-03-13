import React, { Component } from 'react';
import Display from './components/Display'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Scoreboard</h1>
        <Display />
      </div>
    );
  }
}

export default App;
