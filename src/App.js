import React from "react";
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Playlist from "./pages/Playlist";
import Cadastro from "./pages/Cadastro";
import {
  useLocation,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
// import './App.css';

function App() {
  const showHeader = ['/', '/cadastro', '/faq', '/playlist'].includes(window.location.pathname);

  return (
    <BrowserRouter>
      {showHeader ? <Header /> : ''}
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/cadastro" element={<Cadastro className="cadastro" />} />
        <Route path="/faq" element={<Faq className="faq" />} />
        <Route path="/playlist" element={<Playlist classNqme="playlist" />} />
        <Route path="/playlist/:id" element={<h1>Uepa</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showHeader ? <Footer /> : ''}
    </BrowserRouter>

  );
}

export default App;
