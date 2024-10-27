import logo from './logo.svg';
import './App.css';
import "./index.scss"
import Home from './component/home';
import Gallery from './component/Gallery';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './component/footer';
import HeroSection from './component/HeroSection';
import Contact from './component/contact';
import Info from './component/info';
function App() {
  return (
    <div>
<Home />

  <Routes>
    <Route path='/' element={<HeroSection/>} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/infor' element={<Info />} />
    

  </Routes>

<Footer />
    </div>
  
  );
}

export default App;
