import './Userpage.css';
import React, { useState } from 'react';
import { Header } from './components/User/Header/Header';
import Body from './components/User/Body/Body';
import Footer from './components/User/Footer/Footer';

const Userpage = () => {
    return (
        <div className="Home">
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
}

export default Userpage;