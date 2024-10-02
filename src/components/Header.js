import logoIcon from "../assets/logo.svg";
import burgerIcon from "../assets/icon-hamburger.svg";
import closeButton from "../assets/icon-close.svg";
import arrowDown from "../assets/icon-arrow-down.svg";
import { useState, useEffect } from "react";

function Header() {
    const [opened, setOpened] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <header>
            <nav className="navbar">
                <img className="logo" src={logoIcon} alt="logo"/>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <button className="contact" href="/">Contact</button>
                </div>

                <div id="burger-menu" className="burger-icon" onClick={() => setOpened(!opened)}>
                    <img src={opened ? closeButton : burgerIcon} alt="burger-menu-icon" className="close-icon" />
                </div>
                <div className={opened ? "nav-links-mobile opened" : "nav-links-mobile"}>
                <img src={closeButton} alt="close menu" className="close-icon"  onClick={() => setOpened(!opened)}/>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <button className="contact-btn" href="/">Contact</button>
                </div>
            </nav>
            <h1>We are creative!</h1>
            <img src={arrowDown} className={`arrow-img ${isVisible ? "visible" : ""}`} alt="arrow down" />
        </header>
    );
}

export default Header;