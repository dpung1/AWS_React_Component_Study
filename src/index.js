import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App age={27} />); // App에 age라는 props를 넘겨줌

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
