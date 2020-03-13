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
        </div>
    )
}

export default Menu;
