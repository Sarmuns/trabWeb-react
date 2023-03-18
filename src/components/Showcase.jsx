import './Showcase.css';

function Showcase() {
  const background = process.env.PUBLIC_URL + '/img/showcase.webp';
    return (
      <div id="showcase" style={{backgroundImage: `url(${background})`}}>
        <div className="showcase-container">
          <h2>Música para todos.</h2>
          <p>Milhões de músicas a sua escolha. E nem precisa de cartão de crédito.</p>
          <a href='#!' className="btn btn-primary">Obtenha o spotify free.</a>
        </div>
      </div>
    );
  }

export default Showcase