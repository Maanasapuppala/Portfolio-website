import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar";



function App() {

  return (
    <div className={styles.App}>
       <Navbar/>
       <Hero/>
       <About/>
       <Projects/>
       <Contact/>
     
    </div>
  )
}

export default App;
