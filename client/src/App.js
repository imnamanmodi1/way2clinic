import React, { Component } from 'react';
import './App.scss';
import Main from './components/Main';
import DocRegister from './DocRegister';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <DocRegister />
      </div>
    );
  }
}


export default App;
