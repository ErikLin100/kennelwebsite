import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import OurPups from './components/OurPups';


function App() {
  return (
    <div className="bg-transparent">
     
      <Hero/>
      <OurPups/>
      <About/>
      <Contact/>
      <Carousel/>
      <Footer />


    </div>
  );
}

export default App;
