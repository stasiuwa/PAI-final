import React from "react";
import "./styles/Sections.css";
const Offer = () => {
    const lampImages = [
        require('./img/lampamatowa.jpg'),
        require('./img/lampapopolerce.jpg'),
    ];
    return (
        <div className="section" id="section_offer">
            <h3>REGENERACJA&nbsp;LAMP</h3><br/>
            <div className="lampImages">
                <img
                    src={lampImages[0]}
                    alt="MatteLamp"
                />
                &emsp;
                <img
                    src={lampImages[1]}
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
export default Offer;