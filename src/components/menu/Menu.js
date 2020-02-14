import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom"

import menu from '../../docsFolder/menu.jpg';
console.log(menu)



function Menu() {
    return (
        <div>
            <Link
                to="/menu"
            >
            <img src="../../docsFolder/menu.jpg" alt="PDF MENU"/>
            </Link>
        </div>
    )
}

export default Menu;
