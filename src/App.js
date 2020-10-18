import React from 'react';
import './App.css';

import Landing_page from './components/Landing_page/Landing_page';
import About_page from './components/About_page/About_page';
import Navbar_main from './components/Navbar_Main/Navbar_main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>

        <Navbar_main/>

        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home">
              <Landing_page/>
          </Route>
          <Route exact path="/about">
              <About_page/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
