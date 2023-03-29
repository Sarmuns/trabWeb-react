import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import FooterMenuList from './FooterMenuList';
import "./Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src="./logoWhite.png" alt="Logo do Spotify e com texto escrito Spotify, ambos em" className="logo" />
        </div>
        <FooterMenuList type="colA" />
        <FooterMenuList type="colB" />
        <FooterMenuList type="colC" />
        <div className="socials">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </div>

      <div className="footer-info">
        <ul className="footer-info-items">
          <li className="footer-info-item">Legal</li>
          <li className="footer-info-item">Centro de Privacidade</li>
          <li className="footer-info-item">Política de privacidade</li>
          <li className="footer-info-item">Cookies</li>
          <li className="footer-info-item">Sobre anúncios</li>
        </ul>
        <div className="rights">
          <div className="country">
            <p>Brasil</p>
            <img src="./img/brazil.png" alt="bandeira do Brasil" className="brazil-flag" />
          </div>
          <p>&copy; 2023 Spotify AB</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
