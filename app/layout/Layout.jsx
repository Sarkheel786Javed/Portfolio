import React, { useState } from 'react';
import SidebarMain from './Sidebar/SidebarMain'
import MainContent from './MainContent/MainContent';
import Navbar from './Navbar/Navbar';

const AppLayout = () => {

  return (
    <div className='d-flex m-0'>
      <SidebarMain />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
          <div className="col-12">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;