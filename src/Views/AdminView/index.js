import React from 'react';
import { Outlet } from 'react-router';

function AdminView() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AdminView;
