import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Publish from "./Components/Publish";
import Dashboard from "./Components/Dashboard";
import MoreDetails from "./Components/MoreDetails";
import Cart from "./Components/Cart";
import PrivateAccess from "./Components/PrivateAccess";
import Empower from "./Components/Empower";
import SearchedData from "./Components/SearchedData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="/user">
          <Route
            path="dashboard"
            element={
              <PrivateAccess>
                <Dashboard />
              </PrivateAccess>
            }
          ></Route>

          <Route
            path="publish"
            element={
              <PrivateAccess>
                <Publish />
              </PrivateAccess>
            }
          ></Route>

          <Route
            path="cart"
            element={
              <PrivateAccess>
                <Cart />
              </PrivateAccess>
            }
          ></Route>
        </Route>

        <Route path="/user/dashboard/more" element={<MoreDetails />}></Route>

        <Route path="/empowering/:id" element={<Empower />}></Route>

        <Route path="/search/:id" element={<SearchedData />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
