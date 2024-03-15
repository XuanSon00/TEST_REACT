import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'boxicons/css/boxicons.min.css';

import Home from './pages/Home';
import Homepage from './data/homepage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Apple from './data/apple';
import Samsung from './data/samsung';
import Footer from './components/footer';
import Phone from './data/phone';
import Tablet from './data/tablet';
import Cart from './data/cart';
//import Detail from './data/detail';
export default function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/apple' element={<Apple />} />
          <Route path='/samsung' element={<Samsung />} />
          <Route path='/tablet' element={<Tablet />} />
          <Route path='/phone' element={<Phone />} />
          <Route path='/cart' element={<Cart />} />
          {/*<Route path='/detail' element={<Detail />} />*/}
          <Route path="/footer" element={<Footer />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


