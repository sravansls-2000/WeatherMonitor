import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import Rigister from './components/rigister.jsx';
import Home from './components/Home.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Rigister />}></Route>
        <Route path="/Home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
