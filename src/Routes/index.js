import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Components/Home';
import Talleres from '../Views/Talleres';
import Contacto from '../Views/Contacto';

const RoutesLanding = () => {
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
