import React from "react";
import "./CSS/Section.css"
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
                    default:
                        return null
                }
            })()}
        </div>
    );
}
const Offer = () => {
    return (
        <div className="section" id="section_offer">
            OFERTA JAK JASNY CHUJ<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
const Opinions = () => {
    return (
        <div className="section" id="section_opinions">
            OPINIE JAK JAPEIRODLEOELEE<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
const Appointment = () => {
    return (
        <div className="section" id="section_appointment">
            WIZYTA ZE O JEZUNCIU<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
const Contact = () => {
    return (
        <div className="section" id="section_contact">
            KONTAKT NORMALNIE DZWON KIEDY CHCESZ TYLKO NIE W SRODY<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}
export default Section;