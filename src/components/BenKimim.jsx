import React from 'react';
import Lottie from 'lottie-react';
import animasyon from './animasyon/meditasyon.json'; // animasyon dosyanı buraya koy
import okul from './animasyon/okul.json'; // animasyon dosyanı buraya koy
import yetenek from './animasyon/yetenek.json'; // animasyon dosyanı buraya koy
import kod from './animasyon/kod.json'; // animasyon dosyanı buraya koy
import './Giris.css'


const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes bgAnim {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 50%; }
  }
`;
document.head.appendChild(styleTag);


const BenKimim = () => {
    return (
        <section id="benkimim" style={styles.container}>
            <h1 style={styles.baslik}>Ben Kimim?</h1>
            {/* Yarı Saydam Kutu: Animasyon ve Metin Yan Yana */}
            <div style={styles.mainBox}>
                <div style={styles.animationWrapper}>
                    <Lottie animationData={animasyon} loop={true} style={styles.animasyon} />
                </div>
                <div style={styles.textWrapper}>
                    <h2>Ben Berfin Hazar</h2>
                    <p>
                        Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Yazılım geliştirme, kullanıcı arayüzü tasarımı ve problem çözme konularında kendimi geliştirmeye büyük bir tutkuyla devam ediyorum.
                        Teknolojiye olan ilgim yalnızca yazılım alanıyla sınırlı değil; aynı zamanda iki adet 3D yazıcım bulunuyor ve bu cihazlarla çeşitli prototipler üreterek kişiye özel ürünler tasarlayıp satışını gerçekleştiriyorum.
                        Bunun yanı sıra gönüllülük faaliyetlerine de aktif olarak katılıyorum. Çeşitli sosyal sorumluluk projelerinde yer alıyor; ilkokul ziyaretleri, topluluk etkinlikleri ve sosyal farkındalık çalışmaları gibi birçok projeye katkı sağlıyorum.
                        Aynı zamanda salon etkinliklerinde görev alarak hem organizasyon hem de temsil alanlarında tecrübeler ediniyorum. Kendimi sadece teknik becerilerle değil, sosyal yönümle de sürekli geliştirmeye çalışıyorum.
                    </p>
                </div>
            </div>

            {/* Yarı Saydam Kartlar */}
            <div style={styles.kartWrapper}>
                <div style={{...styles.card, width: '400px'}}>
                    <div style={styles.iconWrapper}>
                        <Lottie animationData={okul} loop={true} style={styles.iconAnimasyon} />
                    </div>
                    <h3>Okuduğum Okullar</h3>
                    <ul>
                        <li>Balıkesir Üniversitesi- Bilgisayar Mühendisliği</li>
                        <li></li>
                        <li>Şehit Abdülkadir Kılavız Anadolu Lisesi</li>
                        <li></li>
                        <li>Mehmet Emin Hoşgör Ortaokulu</li>
                        <li></li>
                        <li>Mehmetçik İlkokulu</li>
                    </ul>
                </div>
                <div style={styles.card}>

                    <div style={styles.iconWrapper}>
                        <Lottie animationData={kod} loop={true} style={styles.iconAnimasyon} />
                    </div>
                    <h3>Programlama Dillerim</h3>

                    <ul>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Dart</li>
                        <li>HTML</li>
                        <li>CSS</li>

                    </ul>

                </div>
                <div style={styles.card}>
                    <div style={styles.iconWrapper}>
                        <Lottie animationData={yetenek} loop={true} style={styles.iconAnimasyon} />
                    </div>
                    <h3>Yeteneklerim</h3>
                    <ul>
                        <li>Web Tasarımı</li>
                        <li>Veritabanı Yönetimi</li>
                        <li>UI/UX Tasarımı</li>
                        <li>Mobil Uygulama Geliştirme</li>
                        <li>Temel Seviye Oyun Tasarımı</li>
                        <li> 3D Printer</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
        padding: '6rem 2rem',
        minHeight: '100vh',
        color: 'white',
        textAlign: 'center',
        marginLeft: '300px',

        backgroundSize: '400% 400%',
        animation: 'bgAnim 12s ease infinite',
    },
    mainBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Yarı saydam beyaz
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '900px',
        margin: '3rem auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        textAlign: 'left',
    },

    animationWrapper: {
        flex: '0 0 300px',
        maxWidth: '300px',
    },
    animasyon: {
        width: '100%',
    },
    textWrapper: {
        flex: '1',
        minWidth: '250px',
    },
    baslik: {
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '1rem',  // Kutudan biraz ayrı durması için
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
    },
    kartWrapper: {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginTop: '3rem',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
    },
    iconWrapper: {
        width: '150px',
        height: '150px',
        margin: '0 auto 1rem',  // Ortalamak için auto yan boşluk ve alt boşluk
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconAnimasyon: {
        width: '100%',
        height: '100%',
    }

};

export default BenKimim;
