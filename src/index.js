import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import WspButton from './Shared/WspButton';
import { ContextProvider, ModalProvider } from './Components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes />
          <WspButton />
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </ModalProvider>
  </React.StrictMode>
);
