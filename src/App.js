import "./App.css";
import Header from './components/Header/Header';
import Home from "./components/Header/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Services from "./components/Services/Services";
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
    </main>
    </>
  );
}

export default App;
