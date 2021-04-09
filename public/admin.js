import React from 'react';
import { useMediaQuery } from 'react-responsive'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppAdmin from '../src/AppAdmin';
document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
ReactDOM.render(
  
  <React.StrictMode>
    <AppAdmin />
  </React.StrictMode>,
  document.getElementById('adminroot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
