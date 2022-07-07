import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './Pages/body';
import Header from './Pages/headers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>
);
