import './App.scss';
import Alerts from './components/alerts/Alerts';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Sort from './components/sort/Sort';

function App() {
  return (
    <div className="App">
      <Header />
      <Alerts />
      <Sort />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
