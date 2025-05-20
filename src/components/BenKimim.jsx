import React from 'react';
import Lottie from 'lottie-react';
import animasyon from './animasyon/meditasyon.json';
import okul from './animasyon/okul.json';
import yetenek from './animasyon/yetenek.json';
import kod from './animasyon/kod.json';
import './Giris.css';


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
        <section id="benkimim" className="benkimim-container">
            <h1 className="benkimim-baslik">Ben Kimim?</h1>
            <div className="benkimim-main-box">
                <div className="benkimim-animation-wrapper">
                    <Lottie animationData={animasyon} loop={true} className="benkimim-animasyon" />
                </div>
                <div className="benkimim-text-wrapper">
                    <h2>Ben Berfin Hazar</h2>
                    <p>
                        Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Yazılım geliştirme, kullanıcı arayüzü tasarımı ve problem çözme konularında kendimi geliştirmeye büyük bir tutkuyla devam ediyorum.
                        Teknolojiye olan ilgim yalnızca yazılım alanıyla sınırlı değil; aynı zamanda iki adet 3D yazıcım bulunuyor ve bu cihazlarla çeşitli prototipler üreterek kişiye özel ürünler tasarlayıp satışını gerçekleştiriyorum.
                        Bunun yanı sıra gönüllülük faaliyetlerine de aktif olarak katılıyorum. Çeşitli sosyal sorumluluk projelerinde yer alıyor; ilkokul ziyaretleri, topluluk etkinlikleri ve sosyal farkındalık çalışmaları gibi birçok projeye katkı sağlıyorum.
                        Aynı zamanda salon etkinliklerinde görev alarak hem organizasyon hem de temsil alanlarında tecrübeler ediniyorum. Kendimi sadece teknik becerilerle değil, sosyal yönümle de sürekli geliştirmeye çalışıyorum.
                    </p>
                </div>
            </div>

            <div className="benkimim-kart-wrapper">
                <div className="benkimim-card benkimim-card-okul">
                    <div className="benkimim-icon-wrapper">
                        <Lottie animationData={okul} loop={true} className="benkimim-icon-animasyon" />
                    </div>
                    <h3>Okuduğum Okullar</h3>
                    <ul>
                        <li>Balıkesir Üniversitesi- Bilgisayar Mühendisliği</li>
                        <li>Şehit Abdülkadir Kılavız Anadolu Lisesi</li>
                        <li>Mehmet Emin Hoşgör Ortaokulu</li>
                        <li>Mehmetçik İlkokulu</li>
                    </ul>
                </div>
                <div className="benkimim-card">
                    <div className="benkimim-icon-wrapper">
                        <Lottie animationData={kod} loop={true} className="benkimim-icon-animasyon" />
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
                <div className="benkimim-card">
                    <div className="benkimim-icon-wrapper">
                        <Lottie animationData={yetenek} loop={true} className="benkimim-icon-animasyon" />
                    </div>
                    <h3>Yeteneklerim</h3>
                    <ul>
                        <li>Web Tasarımı</li>
                        <li>Veritabanı Yönetimi</li>
                        <li>UI/UX Tasarımı</li>
                        <li>Mobil Uygulama Geliştirme</li>
                        <li>Temel Seviye Oyun Tasarımı</li>
                        <li>3D Printer</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BenKimim;
