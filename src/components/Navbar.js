import React from 'react';
import './Giris.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#anasayfa" className="nav-link">Ana Sayfa</a></li>
                <li><a href="#benkimim" className="nav-link">Hakkımda</a></li>
                <li><a href="#neler" className="nav-link">Neler Yapabilirim?</a></li>
                <li><a href="#portfolyo" className="nav-link">Projelerim</a></li>
                <li><a href="#iletisim" className="nav-link">İletişim</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
