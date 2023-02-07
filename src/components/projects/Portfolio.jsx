function Portfolio({ project }) {
    return (
        <article className='portfolio__item'>
            <span className='border'></span>
            <span className='border'></span>
            <span className='border'></span>
            <span className='border'></span>
            <div className='portfolio__item-image'>
                <img src={project.image} alt={project.title} />
            </div>
            <h3 className="portfolio__title">{project.title}</h3>
            <div className='portfolio__item-cta'>
                <div className="title">
                    <p style={{color:"whitesmoke",textAlign:"center"}}>{project.title}</p>
                    <p className="description">{project.description}</p>
                </div>
                <div className="animation">

                    <div>

                    <a
                        href={project.links.github}
                        className='btn'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Github
                    </a>
                    </div> 
                     <div>
                    <a
                        href={project.links.live}
                        className='btn btn-primary'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Live Demo
                    </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Portfolio;