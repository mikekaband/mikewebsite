import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/about">About Me</Link>
            </nav>
        </>
    );
};


