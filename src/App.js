import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Playlist from "./pages/Playlist";
import PlaylistMusics from "./pages/PlaylistMusics";
import Cadastro from "./pages/Cadastro";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(()=>{
    setShowHeader(true);
  },[]);
  // useEffect(() => {
  //   let showHeader = ['/', '/cadastro', '/faq', '/playlist'].includes(window.location.pathname);
  //   console.log(`pathname: ${window.location.pathname}`)
  //   console.log(showHeader);
  //   setShowHeader(showHeader);
  // }, [window.location]);
  

  return (
    <BrowserRouter>
      {showHeader ? <Header /> : ''}
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/cadastro" element={<Cadastro className="cadastro" />} />
        <Route path="/faq" element={<Faq className="faq" />} />
        <Route path="/playlist" element={<Playlist className="playlist" />} />
        <Route path="/playlist/:id" element={<PlaylistMusics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showHeader ? <Footer /> : ''}
    </BrowserRouter>

  );
}

export default App;
