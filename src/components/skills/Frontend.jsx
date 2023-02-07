import React from 'react'

const Frontend = () => {
    return (

        <div className="skills__content">
            <span className='border'></span>
            <span className='border'></span>
            <span className='border'></span>
            <span className='border'></span>
            <h3 className="skills__title">Frontend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bxl-html5'></i>
                        <div>
                            <h3 className="skills___name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-css3'></i>
                        <div>
                            <h3 className="skills___name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-javascript' ></i>
                        <div>
                            <h3 className="skills___name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bxl-react' ></i>
                        <div>
                            <h3 className="skills___name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-tailwind-css' ></i>
                        <div>
                            <h3 className="skills___name">Tailwind CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class='bx bxl-git' ></i>
                        <div>
                            <h3 className="skills___name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Frontend