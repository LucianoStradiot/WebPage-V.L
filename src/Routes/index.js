import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from '../Components/Home';
import LandingView from '../Views/LandingView';
import Blog from '../Views/LandingView/Blog';
import Talleres from '../Views/LandingView/Talleres';
import Contacto from '../Views/LandingView/Contacto';
import Login from '../Views/LandingView/Login';
import Error404 from '../Views/Error404';

const RoutesLanding = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingView />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesLanding;
