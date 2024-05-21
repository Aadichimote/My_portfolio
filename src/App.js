import "./App.css";
import Header from './components/Header/Header';
import Home from "./components/Header/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/conntact/Contact";
import Qualification from "./components/qualification/Qualification";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/> 
      <Services/>

      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </main>
    </>
  );
}

export default App;
