import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Navibar from './Navbar'
import Homepage from './components/Homepage';
import Service from './components/Service'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Announcement from './components/Announcement';
import Product from './components/myproduct/Product';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navibar />
      <Routes>
        <Route path='/*' element={<Navigate to='/homepage' />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/service' element={<Service />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/announcement' element={<Announcement />} />
        <Route path='/product' element={<Product />} />
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
