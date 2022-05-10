import React from 'react';
import logo from "../../../assets/img/logo-arrow-2.svg"

function Logo(props) {
    return (
        // <div id="logo_container" style={{ transform: size[props.size] }}>
        //     <div id="logo_before">FREE</div>
        //     <div id="logo">FREE</div>
        //     <div id="logo_after">FREE</div>
        // </div>
        <img id="logo" src={logo} alt="FREE FREE FREE" />
    );
}

export default Logo;