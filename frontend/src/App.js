import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from "./components/login/Login"
import SignUp from "./components/login/SingUp";
import SchemeDetails from "./components/schemeDetails/SchemeDetails";

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/singUp" element={<SignUp/>} />
          <Route path="/details/:id" element={<SchemeDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
