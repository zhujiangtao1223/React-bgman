import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route} from 'react-router-dom'
import {App,APP} from './App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <APP /> */}
    </BrowserRouter>
  </React.StrictMode>
);


