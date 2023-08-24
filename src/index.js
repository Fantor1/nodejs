import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './navbar';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';

const header = ReactDOM.createRoot(document.getElementById('header'));

header.render(
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
