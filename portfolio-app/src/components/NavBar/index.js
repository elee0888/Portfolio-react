import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/About">
              <i className="fas fa-user-tie"></i> About Me{" "}
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/Portfolio">
              <i className="fas fa-address-book"></i> Portfolio
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="/Contact">
              <i className="fas fa-address-book"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;