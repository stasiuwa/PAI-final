import React from "react";
import "./Assets/styles/App.css";

import NavigationBar from "./NavigationBar";
import videoBg from "./Assets/driving_car.mp4";
import imgBg from "./Assets/img/car.jpg";
import Section from "./Section";


const App = () => {
  return (
      <body>
          <header>
              <div id="video">
                  <video className="bgVideo" autoPlay loop muted>
                      <source src={videoBg} type="video/webm"/>
                      <source src={imgBg} type="image/jpg"/>
                  </video>
              </div>
              <p>
                  <fieldset>
                      <legend>AUTOSZROT:</legend>
                      &emsp; Jesteśmy firmą specjalizującą się w branży samochodowej.
                      Działamy na rynku od ponad 10 lat. W tym czasie zaskarbiliśmy sobie zaufanie naszych klientów.
                      Mamy za sobą wiele ogólnoświatowych projektów, ale to nie znaczy że nie zajmujemy się zleceniami
                      od klientów prywatnych.<br/><br/>&emsp;W naszej ofercie znajdziesz wiele sposobów aby zadbać o swoje auto.
                      Od odświeżenia wizualnego po tuning i nowe osiągi - potwierdzone wykresem z siłowni i opiniami klientów.
                  </fieldset>
              </p>
              <h1 id="start">AUTOSZROT</h1>
              <h2>SERWIS&emsp;DETAILING&emsp;HAMOWNIA</h2>
          </header>
          <main>
          <Section section={'slideshow'}/>
          <Section section={'offer'}/>
          <Section section={'appointment'}/>
          <Section section={'opinions'}/>
          <Section section={'contact'}/>
          </main>
          <NavigationBar/>
          <footer>&copy;PW</footer>
      </body>
  );
}

export default App;