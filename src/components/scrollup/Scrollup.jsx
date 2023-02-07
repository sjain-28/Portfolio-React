import React from 'react';
import "./scrollup.css"

const Scrollup = () => {
    const scrollUp = () => {

        window.scrollTo(0, 0)

    }
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup");
        if (window.scrollY >= 1700) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
    return (
        <a href="" className="scrollup" onClick={scrollUp}>
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default Scrollup;
