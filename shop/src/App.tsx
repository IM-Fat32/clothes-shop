import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MobileMenu from "./components/MobileMenu/MobileMenu";

import './App.sass';

function App() {
  return (
    <div className="App">
      <Router>
        <MobileMenu/>
        <Switch>
          <Route exact path="/">
            <div>
              sadiasdi
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
