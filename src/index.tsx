import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Shopping from './pages/Shopping';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="shopping" element={<Shopping />} />
                    <Route path="login" element={<Login />} />
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
