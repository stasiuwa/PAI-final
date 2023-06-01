import React from "react";
import "./Components/CSS/App.css";
import NavigationBar from "./Components/NavigationBar";
import videoBg from "./Assets/driving_car.mp4";
import imgBg from "./Assets/img/car.jpg";
import Section from "./Components/Section";
const App = () => {
  return (
      <main>
          <h1 id="start">SERWIS DETAILING HAMOWNIA</h1>
          <video className="bgVideo" autoPlay loop muted>
              <source src={videoBg} type="video/webm"/>
              <source src={imgBg} type="image/jpg"/>
          </video>
          <NavigationBar/>
          <Section section={'offer'}/>
          <Section section={'opinions'}/>
          <Section section={'appointment'}/>
          <Section section={'contact'}/>
          <footer>&copy;PW</footer>
      </main>
  );
}

export default App;
