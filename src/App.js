
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Project from './components/projects/Projects';
import Qualification from './components/qualification/Qualification';
import Scrollup from './components/scrollup/Scrollup';
// import Services from './components/services/Services';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Project />
        <Qualification />
        <Contact />


      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;


