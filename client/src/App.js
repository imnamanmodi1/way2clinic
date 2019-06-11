import React, { Component } from 'react';
import './App.scss';
import DocRegister from './DocRegister';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DocRegister />
      </div>
    );
  }
}


export default App;
