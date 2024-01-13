import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./slices/userSlice";
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import './App.css'
import { useEffect } from "react";
import InventoryList from "./InventoryList";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/api/users/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        dispatch(login(data))
      } else {
        console.log(data.errors)
      }
    })
  },[dispatch])

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/inventory_list" element={<InventoryList />} />
          <Route path="/log_in" element={<Login/>} />
          <Route path="/sign_up" element={<Signup/>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>  
    </div>
  )
}

export default App
