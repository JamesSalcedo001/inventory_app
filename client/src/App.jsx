import './App.css'

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./slices/userSlice";

import Header from './Header';
import Home from "./Home";
import Login from './Login';
import Signup from './Signup';
import InventoryList from "./InventoryList";


function App() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.user.loggedIn)

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
          {isLoggedIn ? <Route path="/inventory_list" element={<InventoryList />} /> : null}
          <Route path="/log_in" element={<Login/>} />
          <Route path="/sign_up" element={<Signup/>} />
          <Route path="/" element={<Home />} />
        </Routes>  
    </div>
  )
}

export default App
