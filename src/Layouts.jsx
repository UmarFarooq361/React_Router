import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // If you have a Footer component

const Layouts = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer /> {/* Include Footer if you have one */}
    </div>
  );
};

export default Layouts;
