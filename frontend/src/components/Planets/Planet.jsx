import { useState } from "react";
import ResponsiveAppBar from "../Appbar/AppBar";
import Footer from '../Layout/Footer'
import './Mars.css'

const Planet = (props) => {
    
    const customStyle = {
        color: props.fontColor,
        backgroundColor: props.bgColor,
    };

    return ( 
        <div className="mars">
            <ResponsiveAppBar />
            <div>
                <p>{props.obj.name}</p>
                <></>
            </div>
            <div>
                <></>
                <p>{props.obj.color}</p>
            </div>
            <div className="picture-field">
                <button>Travel to Mars</button>
            </div>
            <Footer style={{...customStyle}} /> {/* Use double curly braces */}
        </div>
     );
}

export default Planet;