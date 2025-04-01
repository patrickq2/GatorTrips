import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './nav';
import Home from './home';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
  </React.StrictMode>
);