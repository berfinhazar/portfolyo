import React, { useEffect, useState } from 'react';
import './Giris.css';
import profilFoto from './animasyon/images_profil.png';
import hosgeldinfoto from './animasyon/hosgeldiniz.png';


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
            <div className="panel-arka-plan"></div>
            <div className="sol-panel">
                <img
                    src={profilFoto}  // import edilen değişkeni kullan
                    alt="Profil"
                    className="profil-resmi"
                />
                <h1 className="isim">Berfin Hazar</h1>
                <p className="meslek">Bilgisayar Mühendisi</p>
            </div>
            <div className="intro-yazi">
                <img
                    src={hosgeldinfoto}
                    alt="Hoş Geldin Foto"
                    className="hosgeldin-foto"
                />
                <h1>Hoş geldin!</h1>
                <p>Portfolyoma göz atmaya hazır mısın?</p>
            </div>
        </div>
    );
}

export default Giriş;
