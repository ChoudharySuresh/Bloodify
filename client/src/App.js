// import hero from './Images/hero.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Donor from './Components/Donor'
import Request from './Components/Request'
import Navigation  from './Components/Navigation';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navigation/>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/donor' element={<Donor/>}></Route>
            <Route path='/request' element={<Request/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
