import React from 'react';
import { Outlet, Navigate } from 'react-router';

function SuperAdminView() {
  if (!sessionStorage.getItem('ACCESS_TOKEN')) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default SuperAdminView;
