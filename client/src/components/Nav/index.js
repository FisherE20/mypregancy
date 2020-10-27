import React from "react";
import "./style.css";

function Nav() {
    return (
        <ul className="menu">
          <li><a href="/home"><i className="fi-list"></i> <span>Home</span></a></li>
          <li><a href="/gallery"><i className="fi-list"></i> <span>Gallery</span></a></li>
          <li><a href="/journal"><i className="fi-list"></i> <span>Journal</span></a></li>
          <li><a href="/registry"><i className="fi-list"></i> <span>Registry</span></a></li>
          <li><a href="/contact"><i className="fi-list"></i> <span>Contact</span></a></li>
          <li><a href="/"><i className="fi-list"></i> <span>Logout</span></a></li>  
        </ul>
    );
}

export default Nav;