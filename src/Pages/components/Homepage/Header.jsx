import React, {useState} from 'react'
import logo from './assets/images/logo.png'
import {FaAlignJustify} from "react-icons/fa"
import './css/Header.css';
import {Link} from "react-router-dom"

/*const nav = [
    {
        display: "Home",
    },
    {
        display: "Booth",
    },
    {
        display: "Organization",
    },
    {
        display: "Contact",
    }
]*/

const Log = ({setOpenLog}) => {
    return (
        <div className='log'>
            <div className = "log_container">
                <div className = "reglog_header">
                    <p>Login</p>
                    <button onClick = {()=>setOpenLog(false)} className = "close">x</button>
                </div>
                <div className = "reglog_body">
                    <label for = "email" className = "reglog_label">
                        Email
                    </label>
                    <input type = "email" id = "email" className = "reglog_input" placeholder="Email"></input>
                    <label for = "password" className = "reglog_label">
                        Password
                    </label>
                    <input type = "password" id = "password" className = "reglog_input" placeholder="Password"></input>
                    <div>Forgot Password?</div>
                <button><Link class = "button" to = "/user"> Login </Link></button>
                </div> 
            </div>
        </div>
    );
}

const Reg = ({setOpenReg}) => {
    return (
        <div className = "reg">
            <div className = "reg_container">
                <div className = "reglog_header">
                    <p>Register</p>
                    <button onClick = {()=>setOpenReg(false)} className = "close">x</button>
                </div>
                <div className = "reglog_body">
                    <label for = "organization name" className = "reglog_label">
                        Organization Name
                    </label>
                    <input type = "text" id = "organization name" className="reglog_input" placeholder = "Name"></input>
                    <label for = "organisational representative" className="reglog_label">
                        Organisational Representative
                    </label>
                    <input type = "text" id ="organisational representative" className="reglog_input" placeholder="Name of representative"></input>
                    <label for = "phone" className="reglog_label">
                        Phone Number
                    </label>
                    <input type = "tel" id = "phone" className = "reglog_input" placeholder = "123-45-678"></input>
                    <label for = "email" className="reglog_label">
                        Email
                    </label>
                    <input type = "email" id = "email" className = "reglog_input" placeholder = "abc@gmail.com"></input>
                    <label for = "password" className = "reglog_label">
                        Password
                    </label>
                    <input type = "password" id = "password" className = "reglog_input" placeholder = "Password"></input>
                    <label className = "reglog_label"> Confirm password </label>
                    <input id = "password" className = "reglog_input" placeholder = "Confirm password"></input>
                    <button>Register</button>
                </div> 
            </div>
        </div>
    );
}

const Header = () => {
    const [showReg, setOpenReg] = useState(false)
    const [showLog, setOpenLog] = useState(false)
    return (
        <header id = "header">
            <div className = "m_container">
                <img src = {logo}></img>
                <div id = "mobile_menu">
                    <FaAlignJustify size = {40} id = "mobile_icon"/>
                    <div id = "header_nav">
                        <div className = "m_container">
                            <a href="#hero">Home</a>
                            <a href="#booth">Booth</a>
                            <a href="#organization">Organization</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
                <div id = "header_reg_log">
                    <div className = "reglog_container">
                        <span onClick = {()=>setOpenReg(true)} className = "reglog">Register</span>
                        <span onClick = {()=>setOpenLog(true)} className = "reglog">Login</span>
                    </div>
                </div> 
            </div>
            {showReg && <Reg setOpenReg = {setOpenReg}/>}
            {showLog && <Log setOpenLog = {setOpenLog}/>}
        </header>   
        
    );
}

export {Header, Reg};