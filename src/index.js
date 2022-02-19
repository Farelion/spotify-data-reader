import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import './index.scss';
import App from './App';
import Demo from './routes/demo';
import HowItWorks from './routes/how-it-works';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="demo" element={<Demo />} />
      <Route path="how-it-works" element={<HowItWorks />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);