import React from "react";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
  <a className="navbar-brand" href="#">Eric Lee</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/About">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contact">Contact</a>
      </li>
      <div className="dropdown-menu">
            <a className="dropdown-item" href="About">
              About Me
            </a>
            <a className="dropdown-item" href="Portfolio">
              Portfolio
            </a>
            <a className="dropdown-item" href="Contact">
              Contact
            </a>
          </div>
    </ul>
  </div>
</nav>
  );
}
export default Navbar;
  //   <nav className="navbar navbar-expand-lg">
      
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav">
  //         <li className="nav-item active">
  //           <a className="nav-link" href="/About">
  //             <i className="fas fa-user-tie"></i> About Me{" "}
  //             <span className="sr-only">(current)</span>
  //           </a>
  //         </li>

  //         <li className="nav-item">
  //           <a className="nav-link" href="/Portfolio">
  //             <i className="fas fa-address-book"></i> Portfolio
  //           </a>
  //         </li>
          
  //         <li className="nav-item">
  //           <a className="nav-link" href="/Contact">
  //             <i className="fas fa-address-book"></i> Contact
  //           </a>
  //         </li>


  //       </ul>
  //     </div>
  //   </nav>
