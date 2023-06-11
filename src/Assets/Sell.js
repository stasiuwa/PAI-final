import React from "react";
import "./styles/Sections.css";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



const Sell = () => {
    const cars = [
        {json: require('./data/projectCar1.json'), imgPath: require("./img/car1img.jpg") },
        {json: require('./data/projectCar2.json'), imgPath: require("./img/car2img.jpg") },
        {json: require('./data/projectCar3.json'), imgPath: require("./img/car3img.jpg") }
    ];

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleClose1 = () => setOpen1(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);

    const modalJSON1 = () => {
        return (
            <div id="project-image-button">
                <div className="car-name" style={{ marginTop: "3%"}}>{cars[0].json.model}</div>
                <Button onClick={handleOpen1} style={{ boxShadow: "5px 7px 15px 5px black", background: "#292524", borderRadius: "10px"}}>
                    <img className="project-images" src={cars[0].imgPath} />
                </Button>
                <Modal
                    id="sell-modal"
                    open={open1}
                    onClose={handleClose1}
                >
                    <Box>
                        <Typography variant="h4" component="h2" id="modal-title">
                            {cars[0].json.marka} {cars[0].json.model}
                            <Typography variant="h6" component="h4" style={{ color: "white"}}>
                                CENA: {cars[0].json.cena}
                            </Typography>
                            <Typography id="modal-text">
                                {cars[0].json.opis}
                            </Typography>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ color: "white"}}>Paliwo: {cars[0].json.paliwo}</TableCell>
                                            <TableCell style={{ color: "white"}}>Moc Silnika: {cars[0].json.mocSilnika}</TableCell>
                                            <TableCell style={{ color: "white"}}>Przebieg: {cars[0].json.przebieg}</TableCell>
                                            <TableCell style={{ color: "white"}}>Skrzynia Biegów: {cars[0].json.skrzyniaBiegow}</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                            <TableRow>
                                                <TableCell style={{ color: "white"}}>Rok produkcji: {cars[0].json.dataProdukcji}</TableCell>
                                                <TableCell style={{ color: "white"}}>Typ nadwozia: {cars[0].json.typNadwozia}</TableCell>
                                                <TableCell style={{ color: "white"}}>Kolor nadwozia: {cars[0].json.kolor}</TableCell>
                                                <TableCell style={{ color: "white"}}>Wykończenie wewnątrz: {cars[0].json.tkanina}</TableCell>
                                            </TableRow>
                                    </TableBody>
                                </Table>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        );
    }
    const modalJSON2 = () => {
        return (
            <div id="project-image-button">
                <div className="car-name" style={{ marginTop: "3%"}}>{cars[1].json.model}</div>
                <Button onClick={handleOpen2} style={{ boxShadow: "5px 7px 15px 5px black", background: "#292524", borderRadius: "10px"}}>
                    <img className="project-images" src={cars[1].imgPath} />
                </Button>
                <Modal
                    id="sell-modal"
                    open={open2}
                    onClose={handleClose2}
                >
                    <Box>
                        <Typography variant="h4" component="h2" id="modal-title">
                            {cars[1].json.marka} {cars[1].json.model}
                            <Typography variant="h6" component="h4" style={{ color: "white"}}>
                                CENA: {cars[1].json.cena}
                            </Typography>
                            <Typography id="modal-text">
                                {cars[1].json.opis}
                            </Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: "white"}}>Paliwo: {cars[1].json.paliwo}</TableCell>
                                        <TableCell style={{ color: "white"}}>Moc Silnika: {cars[1].json.mocSilnika}</TableCell>
                                        <TableCell style={{ color: "white"}}>Przebieg: {cars[1].json.przebieg}</TableCell>
                                        <TableCell style={{ color: "white"}}>Skrzynia Biegów: {cars[1].json.skrzyniaBiegow}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{ color: "white"}}>Rok produkcji: {cars[1].json.dataProdukcji}</TableCell>
                                        <TableCell style={{ color: "white"}}>Typ nadwozia: {cars[1].json.typNadwozia}</TableCell>
                                        <TableCell style={{ color: "white"}}>Kolor nadwozia: {cars[1].json.kolor}</TableCell>
                                        <TableCell style={{ color: "white"}}>Wykończenie wewnątrz: {cars[1].json.tkanina}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        );
    }
    const modalJSON3 = () => {
        return (
            <div id="project-image-button">
                <div className="car-name" style={{ marginTop: "3%"}}>{cars[2].json.model}</div>
                <Button onClick={handleOpen3} style={{ boxShadow: "5px 7px 15px 5px black", background: "#292524", borderRadius: "10px"}}>
                    <img className="project-images" src={cars[2].imgPath} />
                </Button>
                <Modal
                    id="sell-modal"
                    open={open3}
                    onClose={handleClose3}
                >
                    <Box>
                        <Typography variant="h4" component="h2" id="modal-title">
                            {cars[2].json.marka} {cars[2].json.model}
                            <Typography variant="h6" component="h4" style={{ color: "white"}}>
                                CENA: {cars[2].json.cena}
                            </Typography>
                            <Typography id="modal-text">
                                {cars[2].json.opis}
                            </Typography>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: "white"}}>Paliwo: {cars[2].json.paliwo}</TableCell>
                                        <TableCell style={{ color: "white"}}>Moc Silnika: {cars[2].json.mocSilnika}</TableCell>
                                        <TableCell style={{ color: "white"}}>Przebieg: {cars[2].json.przebieg}</TableCell>
                                        <TableCell style={{ color: "white"}}>Skrzynia Biegów: {cars[2].json.skrzyniaBiegow}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell style={{ color: "white"}}>Rok produkcji: {cars[2].json.dataProdukcji}</TableCell>
                                        <TableCell style={{ color: "white"}}>Typ nadwozia: {cars[2].json.typNadwozia}</TableCell>
                                        <TableCell style={{ color: "white"}}>Kolor nadwozia: {cars[2].json.kolor}</TableCell>
                                        <TableCell style={{ color: "white"}}>Wykończenie wewnątrz: {cars[2].json.tkanina}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        );
    }
    return (
        <div className="section" id="sell-section">
            <h3>SPRZEDAŻ</h3>
            <div id="projects-container">
                {modalJSON1()}
                {modalJSON2()}
                {modalJSON3()}
            </div>
        </div>
    );
}
export default Sell;