import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <Nav />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;