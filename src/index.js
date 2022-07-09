import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../src/pages/app';
import Home from '../src/pages/home';
import Form from '../src/pages/form';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/marcas" exact element={<App />} />
      <Route path="/form" exact element={<Form />} />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

