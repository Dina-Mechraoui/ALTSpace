
import "./solarInfo.css";
import sun from "../../assets/sun.png";
import logo from "../../assets/SignAndLog/LOGO.png";
import vector from "../../assets/Vector.png";
import c1 from "../../assets/char1.png";
import c2 from "../../assets/char2.png";
import c3 from "../../assets/char3.png";
import c4 from "../../assets/char4.png";
import c5 from "../../assets/char5.png";
import { useState } from "react";

const SolarInfo = () => {

  return (
    <div className="solarInfo-container">
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="sides">
        <div className="sun-side">
          <p>Discover Our Solar System</p>
          <img className="sun" src={sun} alt="sun" />
          <img className="vector" src={vector} alt="vector" />
        </div>
        <div className="info-side">
          <h2>OUR SOLAR SYSTEM</h2>
          <p>
            Our solar system is a fascinating collection of celestial bodies
            that revolves around a central star, the Sun. It consists of eight
            planets, with Earth being the only known planet to support life. The
            inner planets, including Mercury, Venus, Earth, and Mars, are rocky
            and terrestrial, while the outer planets, Jupiter, Saturn, Uranus,
            and Neptune, are gas giants. The solar system also contains numerous
            moons, asteroids, comets, and other debris, all bound by the Sun's
            gravity. It's a testament to the vastness and complexity of the
            universe we inhabit.
          </p>
          <div className="characteristic">
            <div className="character">
              <button onClick={handleEnabled}><img src={c1} alt="info" /></button>
              <h3>Sun Size</h3>
              <p>864,000 mille</p>
            </div>
            <div className="character">
              <img src={c2} alt="info" />
              <h3>Density</h3>
              <p>1,409 g/ml</p>
            </div>
            <div className="character">
              <img src={c3} alt="info" />
              <h3>Covered By</h3>
              <p>Ancient Ancestor</p>
            </div>
            <div className="character">
              <img src={c4} alt="info" />
              <h3>Distance From Earth</h3>
              <p>93 millions milles</p>
            </div>
            <div className="character">
              <img src={c5} alt="info" />
              <h3>Age</h3>
              <p>4,568 billion years</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
};

export default SolarInfo;

