// import hero from './Images/hero.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Donor from './Components/Donor'
import Request from './Components/Request'
import Navigation  from './Components/Navigation';
import Login from './Components/Login';
import Register from './Components/Register';
import RequestTable from './Components/RequestTable';
import DonateTable from './Components/DonateTable';
import DonorList from './Components/DonorList'

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
            <Route path='/RequestTable' element={<RequestTable/>}></Route>
            <Route path='/DonateTable' element={<DonateTable/>}></Route>
            <Route path='/DonorList' element={<DonorList/>}></Route>
            
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
