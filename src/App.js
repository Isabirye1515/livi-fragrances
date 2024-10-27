import logo from './logo.svg';
import './App.css';
import "./index.scss"
import Home from './component/home';
import Gallery from './component/Gallery';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './component/footer';
import HeroSection from './component/HeroSection';
function App() {
  return (
    <div>
<Home />

  <Routes>
    <Route path='/' element={<HeroSection/>} />
    <Route path='/gallery' element={<Gallery />} />

  </Routes>

<Footer />
    </div>
  
  );
}

export default App;
