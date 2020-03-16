import React from 'react';
import menu from '../../docsFolder/menu.jpg';
import menupdf from '../../docsFolder/menu.pdf';
import './menu.css'



function Menu() {
    return (
        <div className="menu-wrapper">
            <a href={menupdf} download="little-luca-menu">
                <div className="menu-img-wrapper">
                <img src={menu} alt="PDF MENU"/>
                </div>
            </a>
            <p
                className="menu-para"
            >
                Please click on the menu if you would like to download the image or you may click/tap and hold to save to your mobile device. 
            </p>
        </div>
    )
}

export default Menu;
