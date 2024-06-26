import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./assets/index.css"

import reportWebVitals from './reportWebVitals';
import "tachyons";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <App />

  </React.StrictMode>
);


reportWebVitals();
