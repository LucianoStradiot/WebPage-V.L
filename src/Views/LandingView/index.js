import React from 'react';
import { Outlet } from 'react-router';

function LandingView() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LandingView;
