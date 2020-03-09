import React from 'react';
import './cta.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom"

// COMPONENTS 
import OrderOnline from './OrderOnline';
import AboutUs from './AboutUs';
import EmailList from './EmailList';
import Jobs from './Jobs';
import Locations from './Locations';

/* This component will hold:
- order online 
- about us
- email list
- jobs
- location
*/

function CTA() {
    return (
        <div className="cta-wrapper">
            <Router>
                    <div className="cta-link-wrapper">
                    <Link to="orderonline">Order Online</Link>
                        <br/>
                    <Link to="aboutus">About Us</Link>
                        <br/>
                    <Link to="emiallist">Email List</Link>
                        <br/>
                    <Link to="jobs">Job Opportunities</Link>
                        <br/>
                    <Link to="locations">Locations</Link>
                    </div>

                    <div className="cta-route-wrapper">
                    <Route exact path="/orderonline">
                        <OrderOnline />
                    </Route>

                    <Route path="/aboutus">
                        <AboutUs />
                    </Route>
                    <Route path="/emiallist">
                        <EmailList />
                    </Route>

                    <Route path="/jobs">
                        <Jobs />
                    </Route>

                    <Route path="/locations">
                        <Locations />
                    </Route>
                    </div>
            </Router>
        </div>
    )
}

export default CTA;
