import React from 'react'
import QRCode from "react-qr-code";
import { UserContext } from '../App';
import { useContext } from 'react';

const Qr = () => {
    const { objectNeeded } = useContext(UserContext);
    console.log("i m in qrcode", objectNeeded)

    // Convert object to string
    const text = JSON.stringify(objectNeeded);

    return (
        <div className='App'>
            <h1>QR</h1>
            {text !== "{}" && <QRCode value={text} />}
        </div>
    )
}

export default Qr