import React, { useState } from 'react'
import "./header.css";


const Header = () => {

    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });


    const [menu, setMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Shubham</a>

                <div className={menu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => { setActiveNav("#home"); setMenu(!menu) }} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => { setActiveNav("#about"); setMenu(!menu) }} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => { setActiveNav("#skills"); setMenu(!menu) }} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#projects" onClick={() => { setActiveNav("#projects"); setMenu(!menu) }} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" onClick={() => { setActiveNav("#qualification"); setMenu(!menu) }} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-graduation-cap nav__icon"></i> Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => { setActiveNav("#contact"); setMenu(!menu) }} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => setMenu(!menu)}></i>
                </div>
                <div className="nav__toggle" onClick={() => setMenu(!menu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
