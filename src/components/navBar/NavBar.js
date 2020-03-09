import React from 'react';
import './navbar.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"


import Menu from '../menu/Menu'
import Home from '../home/Home'
import Catering from './Catering'
import FamousSauce from './FamousSauce'
import ContactUs from './ContactUs'

/*
Nav bar
    - order online
    - about us
    - jobs
    - location(s)
*/

function NavBar(){
    return (
        <Router>
            <nav className="navbar-nav">
                <Link className="nav-links" to="/">Home</Link>
                <Link className="nav-links" to="/menu">Menu</Link>
                <Link className="nav-links" to="/catering">Catering</Link>
                <Link className="nav-links" to="/famoussauce">Famous Sauce</Link>
                <Link className="nav-links" to="/contactus">Contact Us</Link>
            </nav> 


            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/menu">
                    <Menu/>
                </Route>
                <Route path="/catering">
                    <Catering />
                </Route>
                <Route path="/famoussauce">
                    <FamousSauce/>
                </Route>
                <Route path="/contactus">
                    <ContactUs />
                </Route>
            </Switch>
        </Router>
    )
}



export default NavBar;