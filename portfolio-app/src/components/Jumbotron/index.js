import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbodisplay">
        <h1 className="display-4">
          Eric Lee <i className="fas fa-laptop-code"></i>
        </h1>
        <p className="lead"></p>
      </div>
    </div>
  );
}

export default Jumbotron;