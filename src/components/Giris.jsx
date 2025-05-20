import React, { useEffect, useState } from 'react';
import './Giris.css';
import profilAnimasyon from './animasyon/pp.json';
import hosgeldinanimasyon from './animasyon/elsallama.json';


import Lottie from 'lottie-react';

import FaXTwitter from './icon/x.png';
import FaGithub from './icon/github.png';
import FaFacebook from './icon/facebook.png';
import FaInstagram from './icon/insta.png';





function Giris() {
    const [introBitti, setIntroBitti] = useState(false);

    useEffect(() => {
        const zamanlayici = setTimeout(() => {
            setIntroBitti(true);
        }, 6000);

        return () => clearTimeout(zamanlayici);
    }, []);

    return (
        <div className={`giris-kapsayici ${introBitti ? 'intro-bitti' : ''}`}>
            <div className="panel-arka-plan"></div>
            <div className="sol-panel">
                <Lottie
                    animationData={profilAnimasyon}
                    loop={true}
                    className="profil-animasyon"
                />
                <h1 className="isim">Berfin Hazar</h1>
                <p className="meslek">Bilgisayar Mühendisi</p>

                {}
                <div className="sosyal-linkler">
                    <a href="#" onClick={e => e.preventDefault()} target="_blank" rel="noopener noreferrer">
                        <img src={FaXTwitter} alt="Twitter" className="ikon" />
                    </a>
                    <a href="https://github.com/berfinhazar" target="_blank" rel="noopener noreferrer">
                        <img src={FaGithub} alt="GitHub" className="ikon" />
                    </a>
                    <a href="#" onClick={e => e.preventDefault()} target="_blank" rel="noopener noreferrer">
                        <img src={FaFacebook} alt="Facebook" className="ikon" />
                    </a>
                </div>
                <div className="instalink">
                    <a href= "https://www.instagram.com/printerestingcreativ3d?igsh=MXZzYTNlcXc0azg0dw==" target="_blank" rel="noopener noreferrer">
                        <img src={FaInstagram} alt="Instagram" className="instaicon" />
                    </a>
                </div>


            </div>

            <div className="intro-yazi">
                <Lottie
                    animationData={hosgeldinanimasyon}
                    loop={true}
                    className="hosgeldin-animasyon"
                />
                <h1>Hoş geldin!</h1>
                <p>Portfolyoma göz atmaya hazır mısın?</p>
            </div>
        </div>
    );
}

export default Giris;
