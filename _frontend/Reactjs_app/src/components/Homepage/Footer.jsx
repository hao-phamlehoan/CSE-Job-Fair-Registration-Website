import React from 'react'
import './Footer.css';
import {FaFacebook, FaPhoneSquareAlt, FaEnvelope} from "react-icons/fa";

import bk_logo from '../../assets/HomePages_img/HCMUT_logo.png'

function Footer() {
    return (
        <footer id = "footer">
            <div className = "m_container">
                <p><img src = {bk_logo} style = {{width: 16}}></img>Ho Chi Minh University of Technology (HCMUT) - VNU HCM</p>
                <span>
                    <a href="https://www.facebook.com/BKCSE.Multimedia" target="_blank"><FaFacebook/></a>
                    <a href="mailto:dtn-ktmt@hcmut.edu.vn"><FaEnvelope/></a>
                    <a><FaPhoneSquareAlt/></a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;