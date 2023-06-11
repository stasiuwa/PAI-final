import React from "react";
import "./Assets/styles/App.css";

import videoBg from "./Assets/img/driving_car.mp4";
import imgBg from "./Assets/img/car.jpg";

import NavigationBar from "./NavigationBar";
import Offer from "./Assets/Offer";
import ContactWidget from "./Assets/ContactWidget";
import Opinions from "./Assets/Opinions";
import Appointments from "./Assets/Appointments";
import Sell from "./Assets/Sell";
import Employees from "./Assets/Employees";
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
            <h1>AUTOSZROT</h1>
            </header>
            <main>
                <h2 id="offer-bar">SERWIS&nbsp;&nbsp;DETAILING&nbsp;&nbsp;HAMOWNIA</h2>
                <Sell/>
                <Offer/>
                <Appointments/>
                <Opinions/>
                <Employees/>
                <ContactWidget/>
            </main>
            <NavigationBar/>
            <footer>&copy;Paweł Wiński 2023</footer>
            </body>
      );
}

export default App;