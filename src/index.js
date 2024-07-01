import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// console.log(axios.defaults.baseURL);
/* axios.interceptors.request.use(function (config) {
  config.headers['X-Binarybox-Api-Key'] = process.env.REACT_APP_API_KEY;
  return config;
}); */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
