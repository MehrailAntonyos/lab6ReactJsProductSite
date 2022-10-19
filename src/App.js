import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Guard from './component/Guard';
import Notfound from './pages/Notfound';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductDel from './component/ProductDel';
function App() {
// var loc=useLocation().pathname;
  // var token=localStorage.getItem("Token");
  // console.log(loc);
  return (
  <>
  {true && <Navbar/>}
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='/home' element={<Home/>} />
    <Route path='/product' element={<Guard><Product/></Guard>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/moived' element={<ProductDel/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>

  
  </>
  );
}

export default App;
