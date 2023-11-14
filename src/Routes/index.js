import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from '../Components/Home';
import Talleres from '../Views/Talleres';
import Contacto from '../Views/Contacto';

const RoutesLanding = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default RoutesLanding;
