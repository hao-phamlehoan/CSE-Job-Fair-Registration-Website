import React, {useState} from 'react'
import logo from './assets/images/logo.png'
import {FaAlignJustify} from "react-icons/fa"
import './css/Header.css';
import {Link} from "react-router-dom"

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
    const url = "https://jfresgister-booth-api.herokuapp.com/account/register"
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        representation: "",
        password: "",
        conf_password: ""
    })

    function submit(e) {
        if (!(data.password === data.conf_password)) {
            e.preventDefault()
            alert("The passwords you entered did not match\nPlease try again!")
        } else {
            fetch(url, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    id: data.id,
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    representation: data.representation,
                    password: data.password
                })
            })
        }
    }

    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    return (
        <div className = "reg">
            <div className = "reg_container">
                <div className = "reglog_header">
                    <p>Register</p>
                    <button onClick = {()=>setOpenReg(false)} className = "close">x</button>
                </div>
                <form className = "reglog_body" onSubmit = {(e) =>submit(e)}>
                    <label for = "name" className = "reglog_label">
                        Organization Name
                    </label>
                    <input onChange = {(e) => handle(e)} id = "name" value = {data.name} type = "text" className="reglog_input" placeholder = "Name" required name = "Name"></input>
                    <label for = "representation" className="reglog_label">
                        Organisational Representative
                    </label>
                    <input onChange = {(e) => handle(e)} id ="representation" type = "text" value = {data.representation} className="reglog_input" placeholder="Name of representative" required name = "Name of representative"></input>
                    <label for = "phone" className="reglog_label">
                        Phone Number
                    </label>
                    <input onChange = {(e) => handle(e)} id = "phone" type = "tel" value = {data.phone} className = "reglog_input" placeholder = "123-45-678" required name = "123-45-678"></input>
                    <label for = "email" className="reglog_label">
                        Email
                    </label>
                    <input onChange = {(e) => handle(e)} id = "email" type = "email" value = {data.email} className = "reglog_input" placeholder = "abc@gmail.com" required name = "abc@gmail.com"></input>
                    <label for = "password" className = "reglog_label">
                        Password
                    </label>
                    <input onChange = {(e) => handle(e)} id = "password" type = "password" value = {data.password} className = "reglog_input" placeholder = "Password" required name = "Password"></input>
                    <label for = "conf_password" className = "reglog_label"> Confirm password </label>
                    <input onChange = {(e) => handle(e)} id = "conf_password" type = "password" value = {data.conf_password} className = "reglog_input" placeholder = "Confirm password" required name = "Confirm password"></input>
                    <button>Register</button>
                </form> 
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
