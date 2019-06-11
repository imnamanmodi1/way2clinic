import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import DocLogin from './DocLogin'
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <Router>
        <Route exact path='/doctor/login' component={DocLogin} />
    </Router>
    , document.getElementById('root'));
