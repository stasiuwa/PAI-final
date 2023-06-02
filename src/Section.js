import React from "react";
import "./Assets/styles/Section.css"

import { FaMapMarkedAlt } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { BsPhone } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineFacebook } from "react-icons/ai"


const Section = ({ section }) => {
    return (
        <div id="sectionID">
            {(() => {
                switch (section) {
                    case 'offer':
                        return <Offer/>
                    case 'opinions':
                        return <Opinions/>
                    case 'appointment':
                        return <Appointment/>
                    case 'contact':
                        return <Contact/>
                    case 'slideshow':
                        return <SlideShow/>
                    default:
                        return null
                }
            })()}
        </div>
    );
}
const SlideShow = () => { //nie działa, poprawic
    const slides = [
        require("./Assets/img/slide1.jpg"),
        require("./Assets/img/slide2.jpg"),
        require("./Assets/img/slide3.jpg"),
    ];
    const delay = 2500;
    const[index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() { timeoutRef.current && clearTimeout(timeoutRef.current); }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            setIndex( (prevIndex) => prevIndex === slides.length -1 ? 0 : prevIndex + 1 ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index, slides.length]);
    
    return (
        <div className="section" id="section_slideshow">
            <div className="slideShow">
                <div className="slideshowSlider">
                    {slides.map((index) => (
                        <div
                            className="slide"
                            key={index}
                        ></div>
                    ))}
                </div>

            </div>
        </div>
    );
}
const Offer = () => {
    const slideImages = [
        require('./Assets/img/lampamatowa.jpg'),
        require('./Assets/img/lampapopolerce.jpg'),
    ];
    return (
        <div className="section" id="section_offer">
            <p><h3>REGENERACJA LAMP</h3></p>
            <div className="slideContainer">
                <img
                    src={slideImages[0]}
                    alt="MatteLamp"
                />
                &emsp;
                <img
                    src={slideImages[1]}
                    alt="Polished"
                />
            </div>
            <div id="article">
                &emsp;Z czasem wszystkie podzespoły Twojego auta ulegają zużyciu. To samo dotyczy reflektorów, które są szczególnie
                narażone na postępujące procesy starzenia. Zmienne warunki atmosferyczne, kwaśne deszcze, sól drogowa, a także piach.
                To wszystko może uszkadzać lampy samochodu i prowadzić do ich poważnego zmatowienia. W efekcie strumień światła nie
                jest tak silny, jak dawniej i rozchodzi się pod zupełnie innym kątem,
                <b><font color="#fafad2"> co znacznie pogarsza widoczność</font></b>.<br/><br/>&emsp;
                Dzieje się tak dlatego, że większość lamp wykonuje się z tworzywa sztucznego, które jest szczególnie wrażliwe
                na działanie zewnętrznych czynników. Zmatowienie reflektorów to nie tylko gorsza widoczność i wygląd samochodu.
                To również ryzyko
                <b><font color="#fafad2"> odmowy dopuszczenia pojazdu do ruchu przez stację diagnostyczną</font></b>
                . W większości przypadków wystarcza
                zeszlifowanie wierzchniej warstwy lakieru bezbarwnego z lampy, wypolerowanie jej i zabezpieczenie folią/lakierem.
                <br/><br/><b><center><font color="#fafad2"> CENA ZA USŁUGĘ: OD 400ZŁ ZA REFLEKTOR</font></center></b>
            </div>
        </div>
    );
}
const Opinions = () => {

    return (
        <div className="section" id="section_opinions">
            <p><h3>OPINIE</h3></p>
        </div>
    );
}
const Appointment = () => {
    return (
        <div className="section" id="section_appointment">
            <p><h3>UMÓW SIĘ NA WIZYTĘ</h3></p><br/>
            <form>
                <div id="formPart1" className="formParts">
                    <input type="text" name="firstname" placeholder="imię"
                           pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$" required/>
                    <input type="text" name="lastname" placeholder="nazwisko"
                           pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$" required/>
                    <input type="email" name="email" placeholder="sample@mail.xx"
                           pattern="(([\w_]+)-*\.?)+@[\w](([\w]+)-?_?\.?)+([a-z]{2,4})$" required/>
                    <input type="text" inputMode="numeric" name="age" placeholder="numer telefonu"
                           pattern="([1-9]{1}[0-9]{0,2})" required/>


                </div>

                <div id="formPart2" className="formParts">
                    <select>
                        <option value="service">SERWIS</option>
                        <option value="dyno">HAMOWNIA</option>
                        <option value="detailing">DETAILING</option>
                    </select>
                </div>

                <div id="formPart3" className="formParts">
                    <h4>Sposób zapłaty: </h4>
                    <input type="radio" id="radio1" name="payment" value="blik"/>
                    <label className="radio" htmlFor="radio1">BLIK</label>
                    <input type="radio" id="radio2" name="payment" value="visa"/>
                    <label className="radio" htmlFor="radio2">VISA</label>
                    <input type="radio" id="radio3" name="payment" value="bank"/>
                    <label className="radio" htmlFor="radio3">przelewy24</label>
                </div>

                <div id="formPart4" className="formParts">
                    <fieldset>
                        <legend>dodatkowe informacje</legend>
                        <textarea placeholder="opcjonalnie"></textarea>
                    </fieldset>
                </div>

                <div id="formPart5" className="formParts">
                    <input className="button" type="submit" value="Submit"/>
                    <input className="button" type="reset" value="Anuluj"/>
                </div>
            </form>
        </div>
    );
}
const Contact = () => {
    return (
        <div className="section" id="section_contact">
            <p><h3>KONTAKT</h3></p>
            <div id="contactInfo">
                <div className="contactWidget">
                    <GoMail className="icon"/><br/>
                    <div className="stripe"/><br/>
                    autoszrot@gmail.com
                </div>
                <div className="contactWidget">
                    <FaMapMarkedAlt className="icon"/><br/>
                    <div className="stripe"/><br/>
                    ul. Nowy Świat 27 Lublin
                </div>
                <div className="contactWidget">
                    <BsPhone className="icon"/><br/>
                    <div className="stripe"/><br/>
                    666 999 420
                </div>
                <div className="contactWidget">
                    <div><BsInstagram className="iconSocial"/>
                        &nbsp;<a
                            style={{ textDecoration: 'none', color:"wheat" }}
                            href="https://www.https://www.instagram.com/niematakiego/">
                            szrociskoOfficial
                        </a>
                    </div><br/>
                    <div><AiOutlineFacebook className="iconSocial"/>
                        &nbsp;<a
                            style={{ textDecoration: 'none', color: "wheat" }}
                            href="https://www.https://www.facebook.com/niematakiego">
                            autoszrot-SUPŁKAZO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Section;