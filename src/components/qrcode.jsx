import React from 'react'
import QRCode from "react-qr-code";
import { UserContext } from '../App';
import { useContext } from 'react';

const Qr = () => {
    const { objectNeeded } = useContext(UserContext);
    console.log("i m in qrcode", objectNeeded)

    const gen = `Name: ${objectNeeded.name} \n Semester: ${objectNeeded.semester} \n Phone No.: ${objectNeeded.personalContact} \n Purpose: ${objectNeeded.purpose} \n Place: ${objectNeeded.place} \n In Date/Time: ${objectNeeded.inDateTime} \n Out Date/Time: ${objectNeeded.outDateTime}\n`;

    return (
        <div className='App'>
            <h1>QR</h1>
            {objectNeeded.name && objectNeeded.semester && objectNeeded.purpose && objectNeeded.place &&  (
                <QRCode value={gen} />
            )}
        </div>
    )
}

export default Qr