import React from 'react';
import './ContactUs.css'

function Contactus() {
    return (
<div className="contact-us-wrapper">
            <div className="south-city">
                <p 
                    className="south-city-para"
                >            
                <span
                    className="location-title"
                >
                    South San Francisco
                </span>
                    724 El Camino Real
                    South San Francisco, CA 94080
                    <span>                          Tel: 650-589-8916
                    </span>
                    <span>
                    Fax: 650-589-8054
                    </span>
                    <span>
                    Hours: Mon-Fri 8:30am - 5:00pm; Sat 9-5; Sun 9-4    
                    </span>    
                </p>
                <div className="location">
                    <iframe
                        className="map-location"
                        width="350" 
                        height="100"
                        src="https://maps.google.com/maps?q=724%20el%20camino%20real%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0"   
                        marginwidth="0"
                    >
                        <a
                            href="https://www.google.com/maps?f=q&source=s_q&hl=en&geocode&q=724+el+camino+real&sll=37.0625,-95.677068&sspn=47.215051,79.013672&ie=UTF8&hq&hnear=724+El+Camino+Real,+South+San+Francisco,+San+Mateo,+California+94080&ll=37.651446,-122.431726&spn=0.023207,0.054932&z=15" target="_blank"
                        >
                        </a>
                    </iframe> 
                    <br/>
                </div>
            </div>

            <div 
                className="burlingame"
            >
            <p 
                className="south-city-para"
            >            
                <span
                    className="location-title"
                >
                Burlingame
                </span>
                1809 El Camino Real @ Burlingame Shopping Plaza
                    Burlingame, CA 94010
                    <span>         
                    Tel: 650-697-8389
                    </span>
                    <span>
                    Fax: 650-697-6237
                    </span>
                    <span>
                    Hours: Mon-Fri 9:00am - 5:00pm; Sat 9-5; Sun 9-4   
                    </span>    
                </p>
                <div className="location">
                    <iframe
                    className="map-location"
                    width="350" height="100"  src="https://maps.google.com/maps?q=724%20el%20camino%20real%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.google.com/maps?f=q&source=s_q&hl=en&geocode&q=724+el+camino+real&sll=37.0625,-95.677068&sspn=47.215051,79.013672&ie=UTF8&hq&hnear=724+El+Camino+Real,+South+San+Francisco,+San+Mateo,+California+94080&ll=37.651446,-122.431726&spn=0.023207,0.054932&z=15" target="_blank"></a></iframe> 
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Contactus;
