import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BikeProvider from './context/BikeContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BikeProvider>
    <App />
  </BikeProvider>
);

