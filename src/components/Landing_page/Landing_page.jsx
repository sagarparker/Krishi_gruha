import React from 'react'
import  Landing_page_image  from '../../images/landing_page/Landing_page.jpg';
import Krishi_image from '../../images/landing_page/krishi.png';
import './Landing_page.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';


function Landing_page() {
    return (
        <div className="mainDiv container-fluid">
            <div className="row">
                <div className="col-5 contentDiv">
                        
                </div>
                <div className="col-7">
                    <img src={Landing_page_image} width="100%" height="100%"/>
                </div>
            </div>
        </div>
    )
}

export default Landing_page
