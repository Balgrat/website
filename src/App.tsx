import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Shopping from './pages/Shopping';

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

export default App;
