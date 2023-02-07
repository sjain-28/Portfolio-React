import React, { useState } from 'react'
import "./qualification.css";
const Qualification = () => {

    const [pageY, setPageY] = useState(false);
    window.addEventListener("scroll", function () {

        if (window.scrollY >= 2300 && window.scrollY <= 3500 && this.window.innerWidth > 992) {
            setPageY(true)
        }
        else if (window.scrollY >= 2700 && window.scrollY <= 3800 && this.window.innerWidth < 992 && this.window.innerWidth > 768) {
            setPageY(true)
        }
        else if (window.scrollY >= 2950 && window.scrollY <= 4000 && this.window.innerWidth <= 768 && this.window.innerWidth > 577) {
            setPageY(true)
        }
        else if (window.scrollY >= 3700 && window.scrollY <= 4800 && this.window.innerWidth <= 576 && this.window.innerWidth > 480) {
            setPageY(true)
        }
        else if (window.scrollY >= 3400 && window.scrollY <= 4900 && this.window.innerWidth < 480 && this.window.innerWidth > 350) {
            setPageY(true)
        }
        else if (window.scrollY >= 3100 && window.scrollY <= 4500 && this.window.innerWidth < 350 ) {
            setPageY(true)
        }
        else setPageY(false);
    });

    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)} >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech</h3>
                                <span className="qualification__subtitle">
                                    Heritage Institute Of Technology
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2019 - 2023
                                </div>

                            </div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder1" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line1" : "qualification__line"}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder2" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line2" : "qualification__line"}></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">
                                    The Web Development Bootcamp 2021
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>

                        </div>


                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Advance Diploma In Computer Programming</h3>
                                <span className="qualification__subtitle">
                                    Wizard Tech Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2018
                                </div>
                            </div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder3" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line3" : "qualification__line"}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder4" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line4" : "qualification__line"}></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th</h3>
                                <span className="qualification__subtitle">
                                    Millia Convent Eng School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                    <div>CBSE</div>
                                </div>
                            </div>

                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th</h3>
                                <span className="qualification__subtitle">
                                    Mount Zion School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015
                                    <div>CBSE</div>
                                </div>
                                {/* <div>
                                    CBSE
                                </div> */}
                            </div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder5" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line5" : "qualification__line"}></span>
                            </div>
                        </div>

                    </div>



                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">
                                    Startup's Box
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2022 - Aug 2022
                                </div>
                            </div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder1" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line1" : "qualification__line"}></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className={pageY === true ? "qualification__rounder qualification__rounder2" : "qualification__rounder"
                                }></span>
                                <span className={pageY === true ? "qualification__line qualification__line2" : "qualification__line"}></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">
                                    Mandatory Trendz
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2021 - Sept 2021
                                </div>
                            </div>

                        </div>


                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">
                                    Udemy - Angela Yu
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX-Expert</h3>
                                <span className="qualification__subtitle">
                                    Heritage Institute Of Technology
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present                                </div>
                            </div>

                        </div> */}

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Qualification