
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
import ProtectedRoute from './Pages/ProtectedRoute';


function App() {
  const[showNav,setNav]=useState(false)
  const[showAdminNav,setNavAdmin]=useState(false)
  const location =useLocation();
  const path=location.pathname;
  const isLogin=true;
  const userType="user"
  useEffect(()=>{
    if(path.startsWith("/Dashboard")&& userType!=="admin"){
      setNav(true)
    }
    else{
      setNav(false)
    }
    if(path.startsWith("/admin") && userType==="admin"){
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
    {
      !isLogin && (
        <Route path='/login' element={<Login/>}/>
      )
    }

    {/* protected Routes */}
    <>
    <Route element={<ProtectedRoute isLogin={isLogin}/>}>
    <Route path='/login' element={<Navigate to="/"/>}/>
    {
      userType !=="admin" ?(
      <>
      <Route path='/login' element={<Navigate to="/"/>}/>
      <Route path='/' element={<Navigate to="/Dashboard/*"/>}/>
      <Route path='Dashboard/*' element={<Dashboard/>}>
    <Route path='Request' element={<Request/>}>
    <Route path='' element={<Navigate to="leave" />} />
    <Route path='leave' element={<Leave/>}/>
    <Route path='queries' element={<Queries/>}/>
    </Route>
    <Route path='Timesheet' element={<Timesheet/>}/>
    <Route path='Payslips' element={<Payslips/>}/>
    <Route path='Profile' element={<Profile/>}/>
    <Route path='' element={<Dash/>}/>
    </Route>
      </>
      ):(
        <>
        <Route path='/login' element={<Navigate to="/" />}/>
        <Route path='/' element={<Navigate to="/admin"/>}/>
        <Route path='admin' element={<Admin/>}>
    <Route path='' element={<AdminDash/>}/>
    <Route path='employees' element={<Employees/>}>
    <Route path="add" element={<AddEmp/>}></Route>
    <Route path='employee' element={<Employee/>}>
    <Route path=':id' element={<Employee/>}/>
    </Route>
    </Route>
    </Route>
        </>

      )

    }
    
    

    </Route>
    </>
    
    
  </Routes>
  </div>
  </div>
  
   </>
  );
}

export default App;
