import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/pages/app';
import Home from '../src/pages/home';
import Form from '../src/pages/form';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/marcas" exact element={<App />} />
      <Route path="/form" exact element={<Form />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
  
  );