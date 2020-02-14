import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom"


import Menu from '../menu/Menu'

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
            <Link to="/">Home</Link>
            <Link to="/menu" component={Menu}>Menu</Link>
            <Link to="/catering">Catering</Link>
            <Link to="/famoussauce">Famous Sauce</Link> 




            <Route path="/">Home</Route>
            <Route path="/menu" component={Menu}>Menu</Route>
            <Route path="/catering">Catering</Route>
            <Route path="/famoussauce">Famous Sauce</Route>
        </div>
        </Router>
    )
}



export default NavBar;