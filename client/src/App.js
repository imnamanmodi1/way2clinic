import React, { Component } from 'react';
import './App.scss';
import DocLogin from './DocLogin'
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome to the world of programming</p>
        <DocLogin />
      </div>
    );
  }
}


export default App;
