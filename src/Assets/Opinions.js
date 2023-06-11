import React from "react";
import "./styles/Sections.css";

import {FormLabel} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {BsFillTrash2Fill} from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import {AiOutlineCloseSquare} from "react-icons/ai";
import Rating from "@mui/material/Rating";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import DialogActions from "@mui/material/DialogActions";



const Opinions = () => {

    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const defaultOpinion = {
        id: 0,
        user: "",
        stars: "0",
        text: "",
        fixing: false,
        detailing: false,
        tuning: false,
    }
    const [opinion, setOpinion] = React.useState([]);
    const handleClickOpen = () => {
        clearForm()
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {
        opinion.id = index;
        setIndex(prevState => prevState+1);
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
        setOpinion(defaultOpinion)
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
    const addComment = () => {
        return (
            <div>
                <Button id="modal-button" variant="outlined" style={{ width: "100%"}} onClick={handleClickOpen}>
                    Oceń nas!
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Podziel się z nami swoją opinią :)"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description"
                                           style={{
                                               fontSize: "150%",
                                               textAlign: "center"
                                           }}
                        >
                            <form id="opinion-form">
                                <TextField id="username" label="Imie Nazwisko" variant="outlined" name="user"
                                           value={opinion.user} onChange={handleChange}/>
                                <FormLabel component="legend" style={{marginTop:"10%"}}>Z jakich usług korzystałeś?</FormLabel>
                                <FormGroup
                                    style={{ marginLeft: "30%" }}
                                >
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
                                <Box sx={{'& > legend': {mt: 1},}}>
                                    <Typography component="legend">Oceń nas</Typography>
                                    <Rating
                                        name="stars"
                                        value={opinion.stars}
                                        onChange={handleChange}
                                    />
                                </Box>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubmit}>Prześlij</Button>
                        <Button onClick={handleClose} autoFocus><AiOutlineCloseSquare className="icon"/></Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    const showComments = () => {
        const comments = loadLocalStorage();
        if (!comments) {
            return (
                <div>
                    <h4>NIE ZNALEZIONO OPINII</h4><br/>
                </div>
            );
        } else {
            return (
                <>
                        <div className="comment-content">
                            {comments.map((comment, activeStep) => {
                                return <>
                                    <div key={activeStep} className="comments">
                                        <div className="com1">
                                            <div style={{
                                                display: "flex", flexFlow: "row"
                                            }}>
                                                <div>{comments[activeStep].user}:</div>
                                                <div id="icons">
                                                    <Button><FiDelete
                                                        onClick={() => {
                                                            var objects = loadLocalStorage();
                                                            objects.splice(activeStep, 1);
                                                            localStorage.removeItem("opinions");
                                                            localStorage.setItem("opinions",JSON.stringify(objects));
                                                            setOpinion(defaultOpinion);
                                                        }}
                                                        style={{ color: "black", fontSize: "180%"}}/></Button>
                                                </div>
                                            </div>
                                            <TextField
                                            id="user_comment"
                                            value={comments[activeStep].text}
                                            multiline rows={8}
                                            style={{ background: "wheat", borderRadius: "5px"}}
                                            disabled
                                            />
                                        </div>
                                        <div className="com2">
                                            <FormControlLabel
                                                control={<Checkbox
                                                    style={{ color: "lightgoldenrodyellow"}}
                                                    name="fixing"
                                                    checked={comments[activeStep].fixing}
                                                />}
                                                label="Serwis"/>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    style={{ color: "lightgoldenrodyellow"}}
                                                    name="detailing"
                                                    checked={comments[activeStep].detailing}
                                                />}
                                                label="Detailing"/>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    style={{ color: "lightgoldenrodyellow"}}
                                                    name="tuning"
                                                    checked={comments[activeStep].tuning}
                                                />}
                                                label="Tuning"/>
                                            <Rating style={{ color: "red"}} value={comments[activeStep].stars} disabled/>
                                        </div>
                                        <div className="com2">

                                        </div>
                                    </div><br/>
                                </>
                        })}
                            <Button onClick={() => {
                                localStorage.removeItem("opinions");
                                {setIndex(0)}
                            }}><BsFillTrash2Fill style={{ color: "red", fontSize: "180%"}}/></Button>
                    </div><br/>
                </>
            );
        }
    }
    return (
        <div className="section" id="section_opinions">
            <h3>OPINIE</h3><br/>
            <div id="comment_container">
                {showComments()}
            </div>
            {addComment()}
        </div>
    );
}
export default Opinions;