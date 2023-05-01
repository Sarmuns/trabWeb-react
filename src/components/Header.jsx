import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"



const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isFaq = location.pathname === "/faq"
    const isLogin = location.pathname === "/login"
    const isDashboard = location.pathname === "/dashboard"
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const user = JSON.parse(localStorage.getItem('user')) || "Usuário";


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success sticky-top">
            {isLoggedIn ? (
               <Link
               className="navbar-brand mx-3"
               to="/dashboard"
           >
               <img src="/logo.png"
                   alt="Logo"
                   width="30"
                   height="24"
                   className="d-inline-block align-text-top img-fluid mx-1" />
               Spotify
           </Link>
            ) : (
                <Link
                    className="navbar-brand mx-3"
                    to="/"
                >
                    <img src="/logo.png"
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top img-fluid mx-1" />
                    Spotify
                </Link>
            )}

            <div className="collapse navbar-collapse mx-3" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link
                            className={isHomePage ? 'nav-link active' : 'nav-link'}
                            to="/">
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
                        {isLoggedIn ? (
                            <Link
                                className="nav-link"
                                to="/perfil"
                            >
                                {user.username}
                            </Link>
                        ) : (
                            <Link
                                className={isLogin ? 'nav-link  active' : 'nav-link'}
                                to="/login">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;