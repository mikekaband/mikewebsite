import React, { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineExternalLink } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import logo from "./img/MikeMusasLogoMarkDesign_Black.svg";
import '../styles/main.css';
import '../styles/portfolio.css';
import '../styles/aboutme.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove('nav-open');
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
        return () => document.body.classList.remove('nav-open'); // Cleanup
    }, [menuOpen]);

    return (
        <div className="navig">
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="Mike Logo" width={50} />
                </Link>

                <div
                    className="menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    {menuOpen ? <RxCross2 size={43} /> : <HiMenuAlt3 size={43} />}
                </div>

                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={closeMenu}>About Me</NavLink>
                    </li>
                    <li>
                        <a 
                            href="https://www.linkedin.com/in/mike-musas/"
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMenu}
                        >
                            LinkedIn <span><HiOutlineExternalLink size={25} /></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

