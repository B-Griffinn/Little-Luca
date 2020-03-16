import React from 'react';
import './Job.css'

import apply from '../../docsFolder/apply.pdf'

function Jobs() {
    return (
        <div
            className="jobs-wrapper"
        >
            <p
                className="jobs-para"
            >
                Please return the completed application to a Little Lucca Location near you.
            </p>
            <p>
                <a href="http://www.littlelucca.com/LittleLucca-Employment-Application.pdf" target="_blank">Apply Here Today</a> 
            </p>

        </div>
    )
}

export default Jobs;
