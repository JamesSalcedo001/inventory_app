import { Route, Routes } from "react-router-dom";
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/log_in" element={<Login/>} />
          <Route path="/sign_up" element={<Signup/>} />
          <Route path="/" element={<h1>Hello</h1>} />
        </Routes>  
    </div>
  )
}

export default App
