import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from '../Components/Home';
import Profesionales from '../Views/Profesionales';
import Talleres from '../Views/Talleres';
import Contacto from '../Views/Contacto';
import Login from '../Views/Authentication/Login';

const RoutesLanding = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profesionales" element={<Profesionales />} />
        <Route path="/talleres" element={<Talleres />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default RoutesLanding;
