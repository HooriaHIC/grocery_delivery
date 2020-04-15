import React, { Suspense } from 'react';
import './App.css';
import Loader from './components/utils/Loader/loader';
import { Router } from "react-router-dom";
const createHistory = require("history").createBrowserHistory;
//import * as serviceWorker from "./serviceWorker"

const Routes = React.lazy(() => import('./components/utils/Navbar/Routes'))

const history = createHistory()

function App() {

  return (
    <div className="App">

      <Suspense fallback={<Loader />}>
        <Router history={history}>
          <Routes />
        </Router>
      </Suspense>

    </div>
  );
}

export default App;
