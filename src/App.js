import React, { Component } from 'react';
import './App.css';
import Cat from './Cat.js';
class App extends Component {

 

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img id="logo" src="../../images/logo.svg" className="App-logo" alt="logo"></img>
          <h2>Welcome to Cat Gallery</h2>
        </div><br />
        <Cat />
      </div>

    );
  }
}

export default App;
