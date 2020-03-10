import React from 'react';
import './home.css'
import CTA from '../cta_menu/CTA';
import brand from '../../docsFolder/brand.jpeg';

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
        <div className="home homewrapper">
            <CTA />
            <div className="home-img">
            <img  src={brand} alt="Since 1980 Little Luca Speciality Sandwich Shop"/>
            </div>
        </div>
    )
}

export default Home;
