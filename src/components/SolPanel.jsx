import React from 'react';
import profilFoto from './animasyon/images_profile.png';

import '../components/giris.css';  // CSS dosyasını burada import ettik

const SolPanel = () => {
    return (
        <div className="sol-panel">
            <img
                src={profilFoto}
                alt="Profil"
                className="profil-resmi"
            />
            <h2 className="isim">Berfin</h2>
            <p className="meslek">Frontend Developer</p>
        </div>
    );
};


export default SolPanel;
