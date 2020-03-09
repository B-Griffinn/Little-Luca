import React from 'react';
import menu from '../../docsFolder/menu.jpg';
import menupdf from '../../docsFolder/menu.pdf';
console.log(menu)



function Menu() {
    return (
        <div>
            <a href={menupdf} download="little-luca-menu">
                <img src={menu} alt="PDF MENU"/>
            </a>
        </div>
    )
}

export default Menu;
