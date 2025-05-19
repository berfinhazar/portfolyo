import React from 'react';
import Giris from './components/Giris';
import Navbar from './components/Navbar';
import BenKimim from './components/BenKimim'; // <-- EKLENDİ
import NelerYapabilirim from './components/NelerYapabilirim';
import Projelerim from './components/Projelerim';
import Iletisim from "./components/Iletisim";
import AnaSayfa from "./components/AnaSayfa";

function App() {
    return (
        <div>
            <Giris />
            <div className="app-container">
                <Navbar />
                <section id="anasayfa" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Ana Sayfa</h2>
                    <AnaSayfa />

                </section>

                <section id="benkimim" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <BenKimim /> {/* <-- EKLENDİ */}
                </section>

                <section id="neler" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Neler Yapabilirim?</h2>
                    <NelerYapabilirim />
                </section>

                <section id="portfolyo" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Portfolyo</h2>
                    <Projelerim />
                </section>

                <section id="iletisim" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>İletişim</h2>
                    <Iletisim />
                </section>
            </div>
        </div>
    );
}

export default App;
