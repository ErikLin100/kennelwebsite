
import './App.css';
import About from './components/About'
import Contact from './components/Contact'

import Hero from './components/Hero'
import Footer from './components/Footer';
import OurPups from './components/OurPups';
import BreedInfo from './components/BreedInfo';



function App() {
  return (
    <div className="bg-transparent">
     
      <Hero/>
      <About/>
      <OurPups/>
      <BreedInfo/>
      <Contact/>
      <Footer />


    </div>
  );
}

export default App;
