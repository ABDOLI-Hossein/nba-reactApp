import React from 'react';
import { Link } from 'react-router-dom';
import {CURRENT_YEAR} from "../../config";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/">
            <img src="/images/nba_logo.png"  alt="nba logo" className="logo" />
            </Link>
            <div className="right">
                @NBA {CURRENT_YEAR} all rights reserved.
            </div>
        </footer>
    );
};

export default Footer;