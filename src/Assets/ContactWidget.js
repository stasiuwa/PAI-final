import React from "react";
import "./styles/Sections.css";

import {GoMail} from "react-icons/go";
import {FaMapMarkedAlt} from "react-icons/fa";
import {BsInstagram, BsPhone} from "react-icons/bs";
import {AiOutlineFacebook} from "react-icons/ai";


const ContactWidget = () => {
    return (
        <div className="section" id="section_contact">
            <h3>KONTAKT</h3><br/>
            <div id="contactInfo">
                <div className="contactWidget">
                    <GoMail className="icon"/><br/>
                    <div className="stripe"/>
                    <br/>
                    autoszrot@gmail.com
                </div>
                <div className="contactWidget">
                    <FaMapMarkedAlt className="icon"/><br/>
                    <div className="stripe"/>
                    <br/>
                    ul. Nowy Świat 27 Lublin
                </div>
                <div className="contactWidget">
                    <BsPhone className="icon"/><br/>
                    <div className="stripe"/>
                    <br/>
                    666 999 420
                </div>
                <div className="contactWidget">
                    <div><BsInstagram className="iconSocial"/>
                        &nbsp;<a
                            style={{textDecoration: 'none', color: "wheat"}}
                            href="https://www.https://https://www.instagram.com/stasiuwa/?hl=bg">
                            szrociskoOfficial
                        </a>
                    </div>
                    <br/>
                    <div><AiOutlineFacebook className="iconSocial"/>
                        &nbsp;<a
                            style={{textDecoration: 'none', color: "wheat"}}
                            href="https://www.https://https://www.facebook.com/profile.php?id=100009939042748">
                            autoszrot-SUPŁKAZO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactWidget;