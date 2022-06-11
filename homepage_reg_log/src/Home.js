import React, {useState} from 'react';
import {Header} from './components/Header';
import Hero from './components/Hero'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <Header></Header>
      <Hero></Hero>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
