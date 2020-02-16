import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom"
import OrderOnline from './OrderOnline'
/* This component will hold:
- order online 
- about us
- email list
- jobs
- location
*/

function CTA() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="orderonline">Order Online</Link>
                        <br/>
                    <Link to="aboutus">About Us</Link>
                        <br/>
                    <Link to="emiallist">Email List</Link>
                        <br/>
                    <Link to="jobs">Job Opportunities</Link>
                        <br/>
                    <Link to="locations">Locations</Link>
                    <Route exact path="/orderonline">
                        <OrderOnline/>
                    </Route>
                </div>
            </Router>
        </div>
    )
}

export default CTA;
