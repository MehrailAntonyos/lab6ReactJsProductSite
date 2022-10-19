import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Moive from './Pages/Moive';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Garud from './Components/Garud';
import Notfound from './Pages/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import MoiveDel from './Components/MoiveDel';
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
    <Route path='/moive' element={<Garud><Moive/></Garud>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/moived' element={<MoiveDel/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>

  
  </>
  );
}

export default App;
