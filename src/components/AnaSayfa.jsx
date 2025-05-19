import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import './Giris.css';
import girisAnim from './animasyon/karsilama.json'; // Ortada dönen hoş bir animasyon

const AnaSayfa = () => {
    const [girisBitti, setGirisBitti] = useState(false);

    useEffect(() => {
        console.log("AnaSayfa yüklendi ✅");
        const timer = setTimeout(() => {
            setGirisBitti(true);
        }, 3000);


        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`anasayfa-kapsayici ${girisBitti ? 'giris-geldi' : 'gizli'}`}>

        <div className="animasyon-wrapper">
                <Lottie animationData={girisAnim} loop={true} />
            </div>
                <p className="kaydir-notu">Beni daha yakından tanımak için aşağı kaydır 🎈</p>
        </section>
    );
};

export default AnaSayfa;
