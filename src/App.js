import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Guard from './component/Guard';
import Notfound from './pages/Notfound';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductDel from './component/ProductDel';

import Count from './pages/Count';
import { countContext } from './config/countContext';
import { useState } from 'react';
import { favContext } from './config/favContext';

function App() {
  const [count, setCount] = useState(0);
  const [fav, setFav] = useState([]);

  return (
    <favContext.Provider value={{ fav, setFav }}>
      <countContext.Provider value={{ count, setCount }}>

        {true && <Navbar />}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Guard><Product /></Guard>} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/moived' element={<ProductDel />} />
          <Route path='/count' element={<Count/>}/>
          <Route path='*' element={<Notfound />} />
        </Routes>

      </countContext.Provider>
    </favContext.Provider>
  );
}

export default App;
