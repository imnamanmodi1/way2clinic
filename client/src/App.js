import React, { Component } from 'react';
import './App.scss';
import DocRegister from './DocRegister'
import tachyons from 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome to the world of programming</p>
        <DocRegister />
      </div>
    );
  }
}


export default App;
