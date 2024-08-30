
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import Request from './Pages/Request';
import Dash from './Pages/Dash';
import Timesheet from './Pages/Timesheet';
import Payslips from './Pages/Payslips';
import Profile from './Pages/Profile';
import Nav2 from './Components/Nav2';
import Leave from './Components/Leave';
import Queries from './Components/Queries';
import Admin from './Pages/Admin';
import AdminNav from './Components/AdminNav';
import AdminDash from './Pages/AdminDash';
import Employees from './Pages/Employees';
import AddEmp from './Components/AddEmp';
import Employee from './Components/Employee';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[showNav,setNav]=useState(false)
  const[showAdminNav,setNavAdmin]=useState(false)
  const location =useLocation();
  const path=location.pathname;
  useEffect(()=>{
    if(path.startsWith("/Dashboard")){
      setNav(true)
    }
    else{
      setNav(false)
    }
    if(path.startsWith("/admin")){
      setNavAdmin(true)
    }
    else{
      setNavAdmin(false)
    }
  },[path])
  return (
   <>
   <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
  <div className=' flex  overflow-auto'>
  {
    showNav && <Nav/>
  }
  {
    showAdminNav && <AdminNav/>
  }
  <div className=' w-full'>
    {
      showNav && <Nav2/>
    }
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='Dashboard/*' element={<Dashboard/>}>
    <Route path='Request' element={<Request/>}>
    <Route path='' element={<Navigate to="leave" replace />} />
    <Route path='leave' element={<Leave/>}/>
    <Route path='queries' element={<Queries/>}/>
    </Route>
    <Route path='Timesheet' element={<Timesheet/>}/>
    <Route path='Payslips' element={<Payslips/>}/>
    <Route path='Profile' element={<Profile/>}/>
    <Route path='' element={<Dash/>}/>
    </Route>
    <Route path='admin' element={<Admin/>}>
    <Route path='' element={<AdminDash/>}/>
    <Route path='employees' element={<Employees/>}>
    <Route path="add" element={<AddEmp/>}></Route>
    <Route path='employee' element={<Employee/>}>
    <Route path=':id' element={<Employee/>}/>
    </Route>
    </Route>
    </Route>
  </Routes>
  </div>
  </div>
  
   </>
  );
}

export default App;
