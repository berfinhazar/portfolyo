import React, { useEffect, useState } from 'react';
import './Giris.css';

function Giriş() {
    const [introBitti, setIntroBitti] = useState(false);

    useEffect(() => {
        const zamanlayici = setTimeout(() => {
            setIntroBitti(true);
        }, 4000); // 4 saniye sonra animasyonu kaldır

        return () => clearTimeout(zamanlayici);
    }, []);

    return (
        <div className={`giris-kapsayici ${introBitti ? 'intro-bitti' : ''}`}>
            <div className="sol-panel">
                <img
                    src="/profil.png" // public klasörüne koyacağın resim dosyası
                    alt="Profil"
                    className="profil-resmi"
                />
                <h1 className="isim">Berfin Hazar</h1>
                <p className="meslek">Frontend Geliştirici</p>
            </div>
            <div className="intro-yazi">
                <h1>Hoş geldin!</h1>
                <p>Portfolyoma göz atmaya hazır mısın?</p>
            </div>
        </div>
    );
}

export default Giriş;
