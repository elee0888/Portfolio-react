import React from 'react'
import wallImage from "../images/wallImage.jpg";

function Home() {
  const style = {
    background: {
      backgroundImage: `url(${wallImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh"
    }
  };
  return (
    <div style={style.background}>
      <div className="text-left">
        <div className="coverpageText">
          <h1> Eric Lee</h1>
          <br />
          <h3>Web Developer </h3>
          <h6>Check out my work!</h6>

          <a href="/Home" class="coverBtn">
            Enter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;