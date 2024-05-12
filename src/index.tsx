import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Shopping from './pages/Shopping';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="shopping" element={<Shopping/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
