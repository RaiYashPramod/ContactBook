import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContactContextProvider } from './context/ContactContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactContextProvider>
      <App />
    </ContactContextProvider>
  </React.StrictMode>
);

