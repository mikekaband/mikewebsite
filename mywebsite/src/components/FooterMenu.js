import React from "react";
import { Link, useLocation } from 'react-router-dom';
import '../styles/main.css';

export const FooterMenu = () => {
    const location = useLocation();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="nav-footer-menu">
            <ul>
                <li>
                    <Link 
                        to="/" 
                        onClick={handleScrollToTop} 
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/portfolio" 
                        onClick={handleScrollToTop} 
                        className={location.pathname === "/portfolio" ? "active" : ""}
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        onClick={handleScrollToTop} 
                        className={location.pathname === "/about" ? "active" : ""}
                    >
                        About Me
                    </Link>
                </li>
            </ul>
        </div>
    );
};
