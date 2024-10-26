import { useState } from 'react';
import './App.css';
import Login from './components/login.jsx';
import Rigister from './components/rigister.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      <Rigister />
    </>
  );
}

export default App;
