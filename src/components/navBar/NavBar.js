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
import logo from '../../docsFolder/brand.jpeg'

function NavBar(){
    return (
        <Router>
            <nav className="nav-wrapper">
                <a
                    href={logo}
                    class="brand-logo"
                >
                {/* <div
                    // className="nav-brand-img"
                >
                <img
                    src={logo}
                    className="nav-brand-img"
                    alt="Little Lucca's Brand"
                />
                </div>     */}
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                <li><Link className="nav-links" to="/">Home</Link></li>
                <li><Link className="nav-links" to="/menu">Menu</Link></li>
                <li><Link className="nav-links" to="/catering">Catering</Link></li>
                <li><Link className="nav-links" to="/famoussauce">Famous Sauce</Link></li>
                <li><Link className="nav-links" to="/contactus">Contact Us</Link></li>
                </ul>
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