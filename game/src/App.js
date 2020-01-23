import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Player from './component/player'
import logo from './logo.svg';
import './App.css';

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
