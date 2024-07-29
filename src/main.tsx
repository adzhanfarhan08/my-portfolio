import React from 'react';

// Page
import App from './App';

// CSS
import './styles/index.css';

// Router
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
