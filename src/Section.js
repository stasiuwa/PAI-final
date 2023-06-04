import React from "react";


// do sekcji opinie i wizyta ( formularze )
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//gwiazdki do oceny
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// checkboxy
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
//
import {Card, CardContent, Container, FormLabel, Stack} from "@mui/material";

//ikonki
import {FaMapMarkedAlt} from "react-icons/fa";
import {GoMail} from "react-icons/go";
import {BsFillTrash2Fill, BsInstagram, BsPhone} from "react-icons/bs";
import {AiOutlineCloseSquare, AiOutlineEdit, AiOutlineFacebook} from "react-icons/ai";

import "./Assets/styles/Section.css";

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
const SlideShow = () => {
    return (
        <div id="section_slideshow">
        </div>
    );
}
const Offer = () => {
    const lampImages = [
        require('./Assets/img/lampamatowa.jpg'),
        require('./Assets/img/lampapopolerce.jpg'),
    ];
    return (
        <div className="section" id="section_offer">
            <p><h3>REGENERACJA&nbsp;LAMP</h3></p>
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
const Opinions = () => {
    const [open, setOpen] = React.useState(false);
    const defaultOpinion = {
        user: "",
        stars: "0",
        text: "",
        fixing: false,
        detailing: false,
        tuning: false,
    }
    const [opinion, setOpinion] = React.useState([defaultOpinion]);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        clearForm()
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var oldData = JSON.parse(localStorage.getItem("opinions"));
        if (!oldData) {
            localStorage.setItem("opinions", JSON.stringify([opinion]))
        } else {
            localStorage.setItem("opinions", JSON.stringify([...oldData, opinion]))
        }
        clearForm();
        handleClose();
    }
    const clearForm = () => {
        setOpinion(() => defaultOpinion)
    }
    const handleChange = (event) => {
        const value = event.target.type === "checkbox"
            ? event.target.checked : event.target.value;
        setOpinion({
            ...opinion,
            [event.target.name]: value
        });
    }
    // konwertuje json na tablice obiektów
    const loadLocalStorage = () => {
        if ( localStorage.getItem("opinions") ) {
            const test = JSON.parse(localStorage.getItem("opinions"));
            return Object.values(test);
        }
        else return 0
    }
    // niedziała poprawic
    const removeObj = (template) => {
        let objects = JSON.parse(localStorage.getItem("opinions"));
        objects.filter((user) => user!==template);
    }
    const showComments = () => {
    const comments = loadLocalStorage();
        if (!comments) {
            return (
                <div>
                    <h4>NIE ZNALEZIONO OPINIi</h4>
                </div>
            );
        } else {
            return (
                <>
                    <Container>
                        <Stack spacing={3}>
                            {comments.map((comment, i) => {
                                return <div key={i} className="comments">
                                    <Card sx={{width: 275}}>
                                        <CardContent>
                                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                            </Typography>
                                            <Button><BsFillTrash2Fill
                                                className="icon"/></Button>
                                            <Button><AiOutlineEdit className="icon"/></Button>
                                            <Typography variant="body2">
                                                {comment.text}
                                            </Typography>
                                            <Rating value={comment.stars} disabled/>
                                            <FormControlLabel
                                                control={<Checkbox name="fixing" checked={comment.fixing}
                                                                   disabled/>}
                                                label="Serwis"/>
                                            <FormControlLabel
                                                control={<Checkbox name="detailing" checked={comment.detailing}
                                                                   disabled/>}
                                                label="Detailing"/>
                                            <FormControlLabel
                                                control={<Checkbox name="tuning" checked={comment.tuning}
                                                                   disabled/>}
                                                label="Tuning"/>
                                        </CardContent>
                                    </Card>
                                </div>;
                            })}
                        </Stack>
                    </Container>
                </>
            );
        }
    }
    return (
        <div className="section" id="section_opinions">
            <h3>OPINIE</h3>
            <div id="comment_container">
                {showComments()}
            </div>
            <Button id="modal-button" variant="outlined" onClick={handleClickOpen}>
                Oceń nas!
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Podziel się z nami swoją opinią"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form id="opinion-form">
                            <TextField id="username" label="Imie Nazwisko" variant="outlined" name="user"
                                       value={opinion.user} onChange={handleChange}/>
                            <Box sx={{'& > legend': {mt: 1},}}>
                                <Typography component="legend">Oceń nas</Typography>
                                <Rating
                                    name="stars"
                                    value={opinion.stars}
                                    onChange={handleChange}
                                />
                            </Box>
                            <FormGroup>
                                <FormLabel component="legend">Z jakich usług korzystałeś?</FormLabel>
                                <FormControlLabel control={<Checkbox
                                    name="fixing" checked={opinion.fixing} onChange={handleChange}
                                />} label="Serwis"/>
                                <FormControlLabel control={<Checkbox
                                    name="detailing" checked={opinion.detailing} onChange={handleChange}
                                />} label="Detailing"/>
                                <FormControlLabel control={<Checkbox
                                    name="tuning" checked={opinion.tuning} onChange={handleChange}
                                />} label="Tuning"/>
                            </FormGroup>
                            <TextField
                                id="user_comment"
                                label="Komentarz:"
                                placeholder="(opcjonalnie)"
                                multiline rows={8}

                                name="text"
                                value={opinion.text}
                                onChange={handleChange}
                            />
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Prześlij</Button>
                    <Button onClick={handleClose} autoFocus><AiOutlineCloseSquare className="icon"/></Button>
                </DialogActions>
            </Dialog>
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