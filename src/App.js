import React from 'react';
import Giris from './components/Giris';
import Navbar from './components/Navbar';

function App() {
    return (
        <div>

            <Giris />
            {/* Aşağıdaki bölümleri Giris'ten sonra eklemeyi planlıyorsan, buraya ekleyebilirsin */}
            <div className="app-container">
                {/* Bütün sayfa içeriğin */}
                <Navbar />
                <section id="anasayfa" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Ana Sayfa</h2>
                </section>
                <section id="benkimim" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Ben Kimim?</h2>
                </section>
                <section id="neler" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Neler Yapabilirim?</h2>
                </section>
                <section id="portfolyo" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>Portfolyo</h2>
                </section>
                <section id="iletisim" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                    <h2>İletişim</h2>
                </section>
            </div>
        </div>
    );
}

export default App;
