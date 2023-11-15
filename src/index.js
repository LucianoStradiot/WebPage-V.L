import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import WspButton from './Shared/WspButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes />
      <WspButton />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
