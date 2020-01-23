import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Player from './component/player';

function App() {
  return (
    <Router>
        <div id={"app"}>
            <div>
                <Switch>
                    <Player/>
                </Switch>
            </div>
        </div>
    </Router>
)
}


export default App;
