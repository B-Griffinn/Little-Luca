import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom"


import Menu from '../menu/Menu'
import Home from '../home/Home'
import Catering from './Catering'
import FamousSauce from './FamousSauce'
import ContactUs from './ContactUs'

// import Menu from '../menu/Menu';
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
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/catering">Catering</Link>
                <Link to="/famoussauce">Famous Sauce</Link>
                <Link to="/contactus">Contact Us</Link>
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
        </div>
        </Router>
    )
}



export default NavBar;