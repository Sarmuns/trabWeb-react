import React from "react";
import { Link } from "react-router-dom";
import './Showcase.css';
import background from './showcase.webp'

const Showcase = () => {
  // const background = process.env.PUBLIC_URL + '/img/showcase.webp';
  return (
    <div id="showcase" style={{ backgroundImage: `url(${background})` }}>
      <div className="showcase-container">
        <h2>Música para todos.</h2>
        <p>Milhões de músicas a sua escolha. E nem precisa de cartão de crédito.</p>
        <Link
          to="/playlist">
          <a href='#!' className="btn btn-primary">Veja nossas playlists gratuítas</a>
        </Link>

      </div>
    </div>
  );
}

export default Showcase