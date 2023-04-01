import React from "react";
import { Link, useLocation} from "react-router-dom";
import "./Header.css"



const Header = () => {
    const location = useLocation();
    let isHomePage = location.pathname === "/";
    let isFaq = location.pathname ==="/faq"
    let isCadastro = location.pathname ==="/cadastro"
    //A medida que novas páginas forem criadas adicionar o location delas também
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success sticky-top">

            <Link
                className="navbar-brand mx-3"
                to="/">
                <img src="./logo.png"
                    alt="Logo"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top img-fluid mx-1" />
                Spotify
            </Link>

            <div className="collapse navbar-collapse mx-3" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            className={isHomePage ? 'nav-link active' : 'nav-link'}
                            to="/home">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={isFaq ? 'nav-link  active' : 'nav-link'}
                            to="/faq">
                            FAQ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={isCadastro ? 'nav-link  active' : 'nav-link'}
                            to="/">
                            Cadastro
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;