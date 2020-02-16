import React from 'react';
import menu from '../../docsFolder/menu.jpg';
console.log(menu)



function Menu() {
    return (
        <div>
            Hello From Menu Component
            <img src={menu} alt="PDF MENU"/>
        </div>
    )
}

export default Menu;
