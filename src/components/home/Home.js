import React from 'react';
import NavBar from '../navBar/NavBar'
/*

MAIN
- show Menu Button
- show catering button
- show famous sauce button
- since 1980 image

Footer
- Facebook!!
- order online
- about us
- jobs
- location(s)
- menu
- email list
- copyright "Copyright © 2004,2009,2013,2015,2017 Little Lucca Specialty Sandwich Shop, All Rights Reserved."
*/


function Home() {
    return (
        // HOME WRAPPER
        <div>
            Hello From the home page!!

            {/* NAV BAR Sits at top of home */}
            {/* Style Nav Seperately */}
            <NavBar/>

            {/* FOOTER matches nav AND STYLE */}
            <footer>
            <nav>
                <a href="">Home</a>
                <a href="">Menu</a> 
                <a href="">Catering</a> 
                <a href="">Famous Sauce</a>              
            </nav>
            </footer>
        </div>
    )
}

export default Home;
