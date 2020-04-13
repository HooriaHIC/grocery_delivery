import React from 'react';
import './App.css';
import Routes from './components/utils/Navbar/Routes';
import { Router } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;
//import * as serviceWorker from "./serviceWorker"

const history = createHistory()

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>

    </div>
  );
}

export default App;
