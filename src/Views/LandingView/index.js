import React from 'react';
import { Outlet, Navigate } from 'react-router';

function LandingView() {
  if (sessionStorage.getItem('ACCESS_TOKEN')) {
    return <Navigate to="/super-admin" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LandingView;
