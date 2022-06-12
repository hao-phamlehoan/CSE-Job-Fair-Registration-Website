import {Reg} from './Header';
import hero from './assets/images/hero.jpg'
import './css/Hero.css';
import React, {useState} from 'react'

function Hero() {
    const [showReg, setOpenReg] = useState(false)
    return (
        <section id = "hero">
            <img src = {hero}></img>
            <button onClick = {()=>setOpenReg(true)} className = 'reglog' >Register now!</button>
            {showReg && <Reg setOpenReg = {setOpenReg}/>}
        </section>
    );
}

export default Hero