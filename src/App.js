import logo from './logo.svg';
import './App.css';
import "./index.scss"
import Home from './component/home';
import Gallery from './component/Gallery';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './component/footer';
function App() {
  return (
    <div>


  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/gallery' element={<Gallery />} />

  </Routes>

<Footer />
    </div>
  
  );
}

export default App;
