import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Publish from "./Components/Publish";
import Dashboard from "./Components/Dashboard";
import MoreDetails from "./Components/MoreDetails";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/user">
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="publish" element={<Publish />}></Route>
          <Route path="dashboard/more" element={<MoreDetails />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
