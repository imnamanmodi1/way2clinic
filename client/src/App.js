import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import Main from './components/Main';
import 'tachyons';
import DocLogin from './DocLogin'
// import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Router>
          <Route exact path='/doctor/login' component={DocLogin} />
        </Router>
      </div>
    );
  }
}


export default App;
