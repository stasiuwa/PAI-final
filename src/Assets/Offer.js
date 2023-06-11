import React from "react";
import "./styles/Sections.css";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {MdExpandMore} from "react-icons/md";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import diagnostykaKomp from "./img/diagnostykaKomputerowa.jpg";
import elektrykaSamo from "./img/elektrykaSamochodowa.jpg";
import naprawyBiez from "./img/naprawyBiezace.jpg";
import montazOsprz from "./img/montazOsprzetu.jpg";
import chipTuning from "./img/chipTuning.jpg";
import tuningStage from "./img/tuningStage.jpg";
import hamownia from "./img/tuningHamownia.jpg";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Offer = () => {

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleClickOpen1 = () => { setOpen1(true); };
    const handleClickOpen2 = () => { setOpen2(true); };
    const handleClickOpen3 = () => { setOpen3(true); };
    const handleClose1 = () => { setOpen1(false); };
    const handleClose2 = () => { setOpen2(false); };
    const handleClose3 = () => { setOpen3(false); };

    const regeneracjaLamp = () => {
        const lampImages = [
            require('./img/lampamatowa.jpg'),
            require('./img/lampapopolerce.jpg'),
        ];
        return (
            <div className="section" id="section_offer">
                <h4>REGENERACJA&nbsp;LAMP</h4><br/>
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
    const serwis = () => {
        return (
            <div className="section" id="fixing-section">
                <h4>SERWIS</h4>
                <div style={{width: "80%", height: "80%", marginTop:"5%"}}>
                    <Accordion style={{background: "#2c2420", color: "wheat"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<MdExpandMore style={{color: "wheat"}}/>}
                        >
                            <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                DIAGNOSTYKA KOMPUTEROWA
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "flex", flexFlow: "row"}}>
                            <img src={diagnostykaKomp} className="accordion-images"/>
                            <Typography style={{ marginLeft:"5%"}}>
                                &emsp;Diagnostyka komputerowa samochodu polega na podłączeniu do auta specjalnego komputera diagnostycznego,
                                czasem określanego również jako tester diagnostyczny. W ten sposób uzyskuje się informacje dotyczące
                                kondycji pojazdu, szczegółowych parametrów wielu podzespołów oraz miejsca występowania i przyczyn usterek.
                                <br/><br/><b><font color="#fafad2"> CENA ZA USŁUGĘ ZALEŻNIE OD ZLECENIA</font></b>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{background: "#2c2420", color: "wheat"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<MdExpandMore style={{color: "wheat"}}/>}
                        >
                            <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                NAPRAWY BIEŻĄCE
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "flex", flexFlow: "row"}}>
                            <img src={naprawyBiez} className="accordion-images"/>
                            <Typography style={{ marginLeft:"5%"}}>
                                &emsp;Naprawa bieżąca wykonywana systemem indywidualnym polega na bezpośrednim usunięciu wszystkich usterek
                                stwierdzonych w poszczególnych zespołach i podzespołach pojazdu. Naprawa wykonywana systemem wymiany zespołów
                                i podzespołów. Oleje, płyny eksploatacyjne, filtry, hamulce, klocki itp.
                                <br/><br/><b><font color="#fafad2"> CENA ZA USŁUGĘ ZALEŻNIE OD ZLECENIA</font></b>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{background: "#2c2420", color: "wheat"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<MdExpandMore style={{color: "wheat"}}/>}
                        >
                            <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                MONTAŻ OSPRZĘTU
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "flex", flexFlow: "row"}}>
                            <img src={montazOsprz} className="accordion-images"/>
                            <Typography style={{ marginLeft:"5%"}}>
                                &emsp;Zakładamy dodatkowe wyposażenie w samochodzie takie jak:<br/>
                                - czujniki parkowania<br/>
                                -kamery cofania<br/>
                                -światła do jazdy dziennej<br/>
                                -światła LED<br/>
                                -systemy Car-Audio<br/>
                                -zamki centralne<br/>
                                -alarmy
                                <br/><br/><b><font color="#fafad2"> CENA ZA USŁUGĘ ZALEŻNIE OD ZLECENIA</font></b>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{background: "#2c2420", color: "wheat"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<MdExpandMore style={{color: "wheat"}}/>}
                        >
                            <Typography sx={{ width: '80%', flexShrink: 0 }}>
                                ELEKTRYKA SAMOCHODOWA
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ display: "flex", flexFlow: "row"}}>
                            <img src={elektrykaSamo} className="accordion-images"/>
                            <Typography style={{ marginLeft:"5%"}}>
                                &emsp;Diagnozujemy i naprawiamy systemy sterowania silnikiem oraz układy bezpieczeństwa i komfortu jazdy.
                                Instalujemy i uruchamiamy w samochodzie elektryczne i elektroniczne urządzenia sterujące,
                                zabezpieczające i sygnalizacyjne.
                                <br/><br/><b><font color="#fafad2"> CENA ZA USŁUGĘ ZALEŻNIE OD ZLECENIA</font></b>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        );

    }
    const tuning = () => {
        return (
            <div className="section" id="section_offer">
                <h4>TUNING</h4><br/>
                <div id="tuning-container">
                    <Button onClick={handleClickOpen1} id="tuning-buttons">
                        <img src={hamownia} id="tuning-imgs"/>
                        <div id="image-desc"><b>HAMOWNIA</b></div>
                    </Button>
                    <Button onClick={handleClickOpen2} id="tuning-buttons">
                        <img src={chipTuning} id="tuning-imgs"/>
                        <div id="image-desc"><b>chip-tuning</b></div>
                    </Button>
                    <Button onClick={handleClickOpen3} id="tuning-buttons">
                        <img src={tuningStage} id="tuning-imgs"/>
                        <div id="image-desc"><b>tuning Stage 2,3</b></div>
                    </Button>
                    <Dialog
                        open={open1}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose1}
                    >
                        <DialogTitle>{"Zmierz moc swojego auta:"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText><br/>
                                &emsp;Hamownia jest stanowiskiem z rolkami na koła, na którym można symulować warunki drogowe.
                                Dzięki temu samochód można rozpędzić do określonej prędkości, <b>poddać go obciążeniu</b>, podczas gdy
                                w rzeczywistości stoi on w miejscu. Pozwala to nie tylko zaoszczędzić czas, ale także nie wymaga
                                logistyki związanej z przewiezieniem na tor lub w inne miejsce auta.<br/><br/>
                                &emsp;Z każdego pomiaru drukujemy wykres który oddajemy w ręce klienta.
                                <br/><br/><b>CENA ZA POMIAR (DWA PODEJŚCIA): 200 ZŁ</b>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose1}>ZAMKNIJ</Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={open2}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose2}
                    >
                        <DialogTitle>{"Popraw osiągi swojego auta (Stage1)"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText><br/>
                                &emsp;Chiptuning to jedna z metod tuningu silnika. Polega ona na <b>modyfikacji oprogramowania komputera
                                (ECU)</b>, który steruje jednostką napędową. Ta modyfikacja przeprowadzona poprawnie przez specjalistę
                                pozwala na zwiększenie mocy silnika, bez żadnej ingerencji mechanicznej.<br/><br/>
                                <br/><br/><b>CENA ZA MAPE: OD 200 ZŁ</b>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose2}>ZAMKNIJ</Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={open3}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose1}
                    >
                        <DialogTitle>{"Zmodyfikuj podzespoły swojego auta i popraw osiągi"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText><br/>
                                &emsp;Chiptuning i modyfikacja popularnie nazywana Stage2 to nic innego jak <b>poprawienie
                                seryjnego układu chłodzącego powietrze doładowane oraz układu wydechowego</b> - czyli najważniejsze
                                pod względem mocy i jej ewentualnego blokowania układy.<br/><br/>
                                &emsp;Przy opcji Stage3 sugerujemy <b>wzmocnienie(zakucie) silnika</b> w celu zwiększenia jego możliwości
                                jak ewentualne poniesienie momentu obrotowego w okolice. W przypadku Stage3 należy liczyć
                                się również z tym, że przy <b>mocach rzędu 300KM i większych</b> należy używać tylko paliwa 100oktanowego.
                                <br/><br/><b>CENA: USTALANA Z KLIENTEM INDYWIDUALNIE</b>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose3}>ZAMKNIJ</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        );
    }

    return (
        <div>
            {regeneracjaLamp()}
            {serwis()}
            {tuning()}
        </div>
    );
}
export default Offer;