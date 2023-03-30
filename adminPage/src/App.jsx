import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import SetScheme from "./componentes/SetScheme";

function App() {
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
