import React from "react";
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Playlist from "./pages/Playlist";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Cadastro from "./pages/Cadastro";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Cadastro className="cadastro"/>} />
        <Route path="/home" element={<Home className="home"/>} />
        <Route path="/faq" element={<Faq className="faq"/>} />
        <Route path="/playlist" element={<Playlist classNqme="playlist"/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
