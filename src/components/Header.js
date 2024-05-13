import React from 'react';
import logo from '../assets/logo.jpg';
import './Header.css';
function Header() {
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="Logo" />
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </>
    );
}

export default Header;