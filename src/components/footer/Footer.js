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

// import Menu from '../menu/Menu';
/*
Nav bar
    - order online
    - about us
    - jobs
    - location(s)
*/

function Footer(){
    return (
        <Router>
        <div>
            <footer>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/catering">Catering</Link>
                    <Link to="/famoussauce">Famous Sauce</Link>
                </nav> 
            </footer>    



            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/menu">
                    <Menu/>
                </Route>
                <Route path="/catering">Catering</Route>
                <Route path="/famoussauce">Famous Sauce</Route>
            </Switch>
        </div>
        </Router>
    )
}



export default Footer;