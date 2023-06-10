import React, {useState} from "react";
import "./styles/Sections.css";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {FormLabel, MenuItem, Radio, RadioGroup, Select} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { BiReset } from "react-icons/bi";
import { AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";
import { MuiTelInput } from "mui-tel-input";
import dayjs from "dayjs";

const Appointments = () => {
    const [show, setShow] = useState(false);
    const [workshop, setWorkshop] = useState("fixing");
    const [date, setDate] = useState(dayjs());
    const [phone, setPhone] = useState("");
    const defaultAppointment = {
        name: "",
        surname: "",
        email: "",
        workshop: "",
        services: "",
        date: "",
        hour: "",
    }
    const [appointment, setAppointment] = useState([]);
    const fixingServices = [
        "naprawa1", "naprawa2", "naprawa3"
    ];
    const detailingServices = [
        "sprzatniae", "mycie", "woskceramika"
    ];
    const tuningServices = [
        "hamownia", "chpiptuning", "stejdz"
    ];
    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const resetFormPart1 = () => {
        setAppointment(defaultAppointment);
        setWorkshop("fixing");
    }
    const handleChange = (event) => {
        const value = event.target.type === "radio" ?
            setWorkshop(event.target.value) : event.target.value
        setAppointment({...appointment, [event.target.name]: value});
    }
    const handleSelect = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedServices(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }
    const nextStep = () => {
        appointment.workshop = workshop;
        appointment.workshop === "fixing" ? setServices(fixingServices)
            : appointment.workshop === "detailing" ? setServices(detailingServices)
                : setServices(tuningServices);
        setShow(prev => !prev);
    }
    const resetFormPart2 = () => {
        setSelectedServices([]);
        setDate(dayjs());
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        appointment.workshop = workshop;
        appointment.services = selectedServices;
        appointment.date = date;
        console.log(appointment);
    }
    return (
        <div className="section" id="section_appointment">
            <h3>UMÓW SIĘ NA WIZYTĘ</h3><br/>
            <FormControl id="appointment-form">
                {!show && <div className={"appointment-inputs"}>
                    <FormGroup>
                        <TextField
                            required
                            value={appointment.name}
                            name="name"
                            type="text"
                            label="Imie:"
                            style={{ margin: "0.5%"}}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            value={appointment.surname}
                            name="surname"
                            type="text"
                            label="Nazwisko:"
                            style={{ margin: "0.5%"}}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            value={appointment.email}
                            name="email"
                            type="email"
                            label="Adres Email:"
                            placeholder="example@mail.com"
                            style={{ margin: "0.5%"}}
                            onChange={handleChange}
                        />
                    </FormGroup>
                        <FormLabel>Warsztat:</FormLabel>
                    <RadioGroup id="radio-buttons"
                        value={workshop}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="fixing" name="workshop" control={<Radio />} label="Serwis" />
                        <FormControlLabel value="detailing" name="workshop" control={<Radio />} label="Detailing" />
                        <FormControlLabel value="tuning" name="workshop" control={<Radio />} label="Tuning" />
                    </RadioGroup>
                    <div className="buttons-container">
                        <Button
                            id="form-button"
                            style={{ background: "red" }}
                            onClick={resetFormPart1}><BiReset style={{ fontSize: "150%" }}/>
                        </Button>
                        <Button id="form-button" onClick={nextStep}> DALEJ </Button>
                    </div>
                </div>}

                {show && <div className={"appointment-inputs"}>
                    <FormLabel>Wybierz usługę:</FormLabel>
                    <Select
                        labelId="service-name"
                        multiple
                        value={selectedServices}
                        onChange={handleSelect}
                        renderValue={(selected) => selected.join(', ')}
                        style={{
                            width: "100%"
                        }}
                    >
                        {services.map((service) => (
                            <MenuItem key={service} value={service}>
                                <Checkbox checked={selectedServices.indexOf(service) > -1} />
                                <ListItemText primary={service} />
                            </MenuItem>
                        ))}
                    </Select><br/>
                    <Box
                        style={{ margin: "1.75%", height: "50%", display: "flex", flexFlow: "column", justifyContent: "center", alignItems: "center"}}
                    >
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DateTimePicker
                                label="data i godzina wizyty"
                                value={date}
                                defaultValue={dayjs()}
                                onChange={(newDate) => setDate(newDate)}
                            />
                        </LocalizationProvider>
                        <MuiTelInput
                            label="numer telefonu:"
                            style={{ margin: "2%"}}
                            value={phone}
                            onChange={(newPhone) => setPhone(newPhone)} />
                    </Box>
                    <div className="buttons-container">
                        <Button id="form-button" onClick={() => {
                            setShow(false);
                            resetFormPart2();
                        }}>COFNIJ</Button>
                        <Button
                            id="form-button"
                            style={{ background: "red" }}
                            onClick={resetFormPart2}><BiReset style={{ fontSize: "150%" }}/>
                        </Button>
                        <Button
                            id="form-button"
                            style={{ background: "green" }}
                            onClick={handleSubmit}
                        >Prześlij</Button>
                    </div>
                </div>}


            </FormControl>
        </div>
    );
}
export default Appointments;
/*

<Button onClick={handleReset}>Anuluj</Button>

<Select
                        value={appointment.workshop}
                        onChange={handleChange}
                        label="Usługa"
                    >
                        {fixingServices.map((service) => (
                            <MenuItem
                                key={service}
                                value={service}
                            >
                                {service}
                            </MenuItem>
                        ))}
                    </Select>*/