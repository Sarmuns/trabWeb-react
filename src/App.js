import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Faq from './pages/Faq';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home className="home"/>} />
        <Route path="/faq" element={<Faq className="faq"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
