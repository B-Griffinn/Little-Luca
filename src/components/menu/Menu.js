import React from "react";
import menu from "../../docsFolder/menu.jpg";
import menupdf from "../../docsFolder/menu.pdf";
import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-wrapper">
        <div className="menu-img-wrapper">
          <a href={menu} target="_blank" > 
          <img className="menu-img" src={menu} alt="PDF MENU" />
          </a> 
        </div>

        <div className="menu-para-wrapper">
        <p className="menu-para">
        <a href={menupdf} download="little-luca-menu">
        Click here </a> to download the menu or simply click on the image to enlargen it.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
