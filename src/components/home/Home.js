import React from 'react';

import brand from '../../docsFolder/brand.jpeg';
import CTA from '../cta menu/CTA';

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
        <div>
            Hello From Home Component
            <img src={brand} alt="Since 1980 Little Luca Speciality Sandwich Shop"/>

            <CTA/>
        </div>
    )
}

export default Home;
