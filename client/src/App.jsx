import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
// import Header from './Header';
// import Login from './Login';
// import Signup from './Signup';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/testing" element={<h1>test route</h1>} />
          <Route path="/" element={<h1>Page Count: {count}</h1>} />
        </Routes>  
    </div>
  )
}

export default App
