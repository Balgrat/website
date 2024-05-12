import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './contexts/user.context';
import './index.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import Shopping from './pages/Shopping';
import Signup from './pages/Signup';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="shopping" element={<Shopping />} />
                        </Route>
                    </Route>
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
