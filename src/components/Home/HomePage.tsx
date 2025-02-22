// import React, { useState } from 'react'
import {
  Outlet,
  useNavigate,
} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

import Navbar from './Navbar';
import TopNavbar from './TopNavbar';
import { useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogged = () => {
      const token =
        localStorage.getItem('access');
      if (!token) navigate('/auth/login');
    };
    isLogged();
  }, [navigate]);

  return (
    <>
      <div className='container-scroller d-flex'>
        <Navbar />
        <div className='container-fluid page-body-wrapper'>
          <TopNavbar />
          <div className='main-panel'>
            <div className='content-wrapper'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      {/* <Dashboard /> */}
    </>
  );
};

export default HomePage;
