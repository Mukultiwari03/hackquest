import React, { useState } from 'react'
import QRCode from "react-qr-code";


const Qr = (item) => {
  

    // function handleChange(e) {
    //     setData(e.target.value)
    // }
    return (
        <div className='App'>
            <h1>QR</h1>
            <QRCode value="hello" />

            {/* <div className="input-here">
                <p>Enter your text here</p>
                <input type="text" value={text} onChange={(e) => { handleChange(e) }} />
            </div> */}
        </div>
    )
}

    

export default Qr