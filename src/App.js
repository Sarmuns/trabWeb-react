import Header from './components/Header';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Faq from './pages/Faq';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
