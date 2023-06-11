import React, { useState, useEffect } from "react";
import "./styles/Sections.css";
function Employees() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }


    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="section" id="section-employees">
            <h3>PRACOWNICY</h3>
            <center style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                width: "100%"
            }}>
                {data.map((dataObj) => {
                    return (
                        <div
                            style={{
                                width: "40%",
                                backgroundColor: "goldenrod",
                                padding: "1%",
                                margin: "2%",
                                borderRadius: "10px",
                                marginBlock: "10px",
                            }}
                        >
                            <p style={{ fontSize: 20, color: 'wheat' }}>
                                {dataObj.name}
                                <p style={{ fontSize: 14, color: "black"}}>
                                    {dataObj.email}
                                </p>
                            </p>
                        </div>
                    );
                })}
            </center>
        </div>
    );
}

export default Employees;