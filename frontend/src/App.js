import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import ForgotPassword from "./components/login/ForgotPassword";
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp";
import SchemeDetails from "./components/schemeDetails/SchemeDetails";

function App() {
  return (
    <div className="App">
      <Router >
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/details/:id" element={<SchemeDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
