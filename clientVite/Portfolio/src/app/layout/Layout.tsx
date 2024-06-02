// import React, { useState } from 'react';
// import SidebarMain from './Sidebar/SidebarMain'
import Navbar from './Navbar/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from './Footer/Footer';

const AppLayout = () => {
  const location = useLocation()
  // const path = location.pathname
  // const auth = localStorage.getItem('auth')
  return (
    <div className='d-flex m-0'style={{maxWidth:"100%",  backgroundColor: "#0A0F0D"}}>
      <div className='d-block w-100'>
        {location.pathname === '/login' || location.pathname === "/signup" ? ("") : (
          <Navbar />
        )}
          <Outlet />
          <Footer />
      </div>

    </div>
  );
};

export default AppLayout;