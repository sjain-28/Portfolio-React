import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Shubham</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    


                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>

                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/profile.php?id=100009845377292" className="footer__social-link facebook" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shubhamjaindev/" className="footer__social-link linkedin" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/shubham__jain28/" className="footer__social-link instagram" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                </div>
                <span className='footer__copy'>Created By <a href="#">Shubham Jain</a> &copy; | 2023 All rights reserved.</span>

            </div>
        </footer>
    );
}

export default Footer;
