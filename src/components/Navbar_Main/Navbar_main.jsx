import React from 'react'
import logo  from '../../images/common/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';

function Navbar_main() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">
          <img src={logo} width="105" height="50" alt="Failed to load logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ml-1 ml-md-5">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item ml-1 ml-md-5">
              <Link className="nav-link" to="/about">About</Link>  
            </li>
            <li className="nav-item ml-1 ml-md-5">
              <Link className="nav-link" to="/login">Login</Link>  
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar_main
