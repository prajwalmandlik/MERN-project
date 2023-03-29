import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ForgotPassword from "./components/login/ForgotPassword";
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp";
import SchemeDetails from "./components/schemeDetails/SchemeDetails";
import { server } from ".";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Profile from "./components/profile/Profile";
// import Cookies from "js-cookie";


function App() {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.user);

  const updateUser = (isLogin, userData) => {
    dispatch({
      type: "updateLogin",
      payload: isLogin,
    });

    dispatch({
      type: "updateUserData",
      payload: userData,
    });
  }


  useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        const userData = res.data.user;
        updateUser(true, userData);
      })
      .catch((error) => {
        const userData = { name: "", email: "" }
        updateUser(false, userData);
      });
  },[login])

  return (
    <div className="App">
      <Router >
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/details/:id" element={<SchemeDetails />} />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
