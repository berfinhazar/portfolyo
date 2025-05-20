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
                    <AnaSayfa />
                </section>

                <section id="benkimim" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <BenKimim />
                </section>

                <section id="neler" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <NelerYapabilirim />
                </section>

                <section id="portfolyo" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <Projelerim />
                </section>

                <section id="iletisim" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <Iletisim />
                </section>
            </div>
        </div>
    );
}

export default App;
