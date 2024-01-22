import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Home from '../Components/Home';
import LandingView from '../Views/LandingView';
import Blog from '../Views/LandingView/Blog';
import Talleres from '../Views/LandingView/Talleres';
import Contacto from '../Views/LandingView/Contacto';
import Login from '../Views/LandingView/Login';
import Error404 from '../Views/Error404';
import SuperAdminView from '../Views/SuperAdminView';
import HomeSuperAdmin from '../Views/SuperAdminView/HomeSuperAdmin';
import RecoverPassword from '../Views/LandingView/Login/RecoverPassword';
import ResetPassword from '../Views/LandingView/Login/ResetPassword';

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
          <Route path="/recover-password" element={<RecoverPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Route>

        <Route path="/super-admin" element={<SuperAdminView />}>
          <Route index element={<HomeSuperAdmin />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default RoutesLanding;
