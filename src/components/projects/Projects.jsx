import Portfolio from './Portfolio';
import uberImg from '../../assets/uber.png';
import travelImg from '../../assets/traveladvisor.png';
import cryptoImg from '../../assets/cryptoworld.png';
import quizHub from "../../assets/quizhub.png";
import oldPortfolio from "../../assets/portfolioOld.png";

import './portfolio.css';

const projects = [
    {
        id: 1,
        title: 'Crypto World',
        description: 'Crypto World is a cryptocurrency information and news webapp',
        links: {
            github: 'https://github.com/sjain-28/cryptoWorld',
            live: 'https://cryptoworld-28.netlify.app',
        },
        image: cryptoImg,
    },
    {
        id: 2,
        title: 'Travel Advisor',
        description: 'This is a web app which shows information about restaurants and hotels in map',
        links: {
            github: 'https://github.com/sjain-28/Travel-Advisory',
            live: 'https://travel-advisor-28.netlify.app',
        },
        image: travelImg,
    },
    {
        id: 3,
        title: 'Uber clone',
        description: 'This is a clone of uber which shows fare and direction on map',
        links: {
            github: 'https://github.com/sjain-28/uber-next',
            live: 'https://uber-clone-28.netlify.app',
        },
        image: uberImg,
    },
    {
        id: 4,
        title: 'Quiz Hub',
        description: 'A quiz web app which gives you feel like Kaun Banega Crorepati',
        links: {
            github: 'https://github.com/sjain-28/Quiz-Hub',
            live: 'https://quizhub-28.netlify.app',
        },
        image: quizHub,
    },
    {
        id: 5,
        title: 'Old Portfolio',
        description: 'My old portfolio website',
        links: {
            github: 'https://github.com/sjain-28/Portfolio-Old',
            live: 'https://shubhamjain-28.onrender.com/',
        },
        image: oldPortfolio,
    }
];

const Projects = () => {
    return (
        <section id='projects' className='section projects'>
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">
                My Recent works
            </span>


            <div className='container portfolio__container '>

                {projects.map((item) => (
                    <Portfolio key={item.id} project={item} />
                ))}
            </div>

        </section>
    );
};

export default Projects;