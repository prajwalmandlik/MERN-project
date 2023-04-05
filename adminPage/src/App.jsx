import axios from "axios";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import SetScheme from "./componentes/SetScheme";
import { Context, server } from "./main";

function App() {

const { isAuthenticated,setIsAuthenticated , setUser } = useContext(Context)

  useEffect(() => {
    axios
      .get(`${server}/admin/me`, {
        withCredentials: true,
      })
      .then((res) => {
        const userData = res.data.admin;
        setIsAuthenticated(true);
        setUser(userData);
      })
      .catch((error) => {
        const userData = {  email: "" }
        setIsAuthenticated(false);
        setUser(userData)
      });
  },[isAuthenticated])

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setScheme/:id" element={ <SetScheme /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
