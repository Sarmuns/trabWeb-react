import React from "react";
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Faq from './pages/Faq';
import Playlist from "./pages/Playlist";
import PlaylistMusics from "./pages/PlaylistMusics";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import UserHome from "./pages/UserHome";
import PerfilPage from "./pages/PerfilPage";
import UserPlaylistView from "./pages/UserPlaylistView";

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={<Layout><Home className="home" /></Layout>}
        />
        <Route
          path="/cadastro"
          element={<Layout><Cadastro className="cadastro" /></Layout>}
        />
        <Route
          path="/login"
          element={<Layout><Login className="login" /></Layout>}
        />
        <Route
          path="/dashboard"
          element={<Layout><UserHome className="userHome" /></Layout>}
        />
        <Route
          path="/faq"
          element={<Layout><Faq className="faq" /></Layout>}
        />
        <Route
          path="/playlist"
          element={<Layout><Playlist className="playlist" /></Layout>}
        />
        <Route
          path="/playlist/:id"
          element={<Layout><PlaylistMusics /></Layout>}
        />
        <Route
          path="/login"
          element={<Layout><Login className="login" /></Layout>}
        />
        <Route
          path="/perfil"
          element={<Layout><PerfilPage className="perfil" /></Layout>}
        />
        <Route
          path="/userPlaylist/:id"
          element={<Layout><UserPlaylistView className="userplay" /></Layout>}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
