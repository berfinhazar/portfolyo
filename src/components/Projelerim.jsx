import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import './Giris.css'; // Genel CSS dosyasını import et

import proje1Anim from './animasyon/yemek.json';
import proje2Anim from './animasyon/oyun2.json';
import proje3Anim from './animasyon/yemek2.json';
import proje4Anim from './animasyon/notebook.json';


const projeler = [
    {
        id: 1,
        isim: "Yemek Tarifi Asistanı",
        animasyon: proje1Anim,
        aciklama: "Bu proje, kullanıcıların evdeki mevcut malzemeleri girerek en uygun yemek tariflerini hızlı ve kolay bir şekilde bulmalarını sağlar. Kullanıcı dostu arayüzü, geniş tarif veritabanı ve API entegrasyonları sayesinde tarifler hem özet hem detaylı biçimde sunulur. Ayrıca, kullanıcılar tarifleri alerjen, intolerans ve mutfak türü gibi filtrelerle kişiselleştirerek kendilerine en uygun sonuçlara ulaşabilir.",
        github:" https://github.com/berfinhazar/Yemek_Tarif_Asistani.git",
    },
    {
        id: 2,
        isim: "Uçak Oyunu",
        animasyon: proje2Anim,
        aciklama: "Bu oyun, Python programlama dili ve Pygame kütüphanesi kullanılarak geliştirilmiş, kullanıcı dostu ve eğlenceli bir uçuş oyunudur.\n" +
            "\n" +
            "Oyunda oyuncu, ekran üzerinde hareket eden bir uçağı klavye kontrolleri ile yönetir. Amaç, yolda karşılaşılan çeşitli engellerden başarılı bir şekilde kaçınmak ve mümkün olduğunca uzun süre hayatta kalarak yüksek puan toplamaktır.",
        github: "https://github.com/berfinhazar/Ucus-Oyunu.git",
    },
    {
        id: 3,
        isim: "Görsel Programlama ile Yemek Sistemi",
        animasyon: proje3Anim,
        aciklama: "Bu proje, PyQt5 ile görsel programlama kullanılarak geliştirildi. Kullanıcı, giriş veya kayıt ekranından başlayarak adım adım yönlendirilir. Kayıt sonrası alerji, intolerans ve yemek türü seçimleri yapılır.\n" +
            "\n" +
            "Ardından, bu bilgilere uygun tarifler bir API üzerinden çekilerek görsel kartlar hâlinde gösterilir. Kullanıcı, tarifleri favorilere ekleyebilir ve favori listesini ayrı bir ekranda görebilir.\n" +
            "\n" +
            "Tüm ekranlar ayrı Python dosyaları olarak tasarlandı ve main.py üzerinden birbirine bağlandı. Arayüzler tamamen butonlar, listeler ve görsellerle oluşturuldu; kod yazımı minimumda tutuldu.\n" +
            "\n" +
            "Proje, görsel programlama öğrenimi için temel bir örnek niteliğindedir.",
        github: "https://github.com/berfinhazar/Yemek-Uygulamasi.git",
    },
    {
        id: 4,
        isim: "Notepad",
        animasyon: proje4Anim,
        aciklama: "Bu çalışma, Python programlama dili ile PyQt5 kütüphanesi kullanılarak geliştirilen basit bir Not Defteri (Notepad) uygulamasını ele almaktadır. Uygulama, temel metin düzenleme işlevlerini kullanıcı dostu bir arayüzle sunmayı amaçlamaktadır.Uygulama, kullanıcı etkileşimine duyarlı bir yapıdadır ve QFileDialog, QFontDialog ile QMessageBox gibi PyQt5 bileşenleri sayesinde etkileşimli bir deneyim sağlamaktadır. Uygulamanın amacı, PyQt5 kullanarak temel GUI (Graphical User Interface) kavramlarının öğrenilmesi ve uygulanabilir örneklerle pekiştirilmesidir.",
        github: "https://github.com/berfinhazar/NotePad.git",
    },
];

const cardVariants = {
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
        transition: { duration: 0.3 },
    },
};

const Projelerim = () => {
    return (
        <section
            id="portfolyo"
            className="projelerim-container"
        >
            <h2 className="projelerim-baslik">Projelerim</h2>
            <div className="projelerim-grid">
                {projeler.map(({ id, isim, animasyon, aciklama, github }, index) => (
                    <motion.div
                        key={id}
                        className={`projelerim-card ${index % 2 === 0 ? 'projelerim-card-left' : ''}`}
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <h3 className="projelerim-proje-baslik">{isim}</h3>
                        <div className="projelerim-animasyon-wrapper">
                            <Lottie animationData={animasyon} loop={true} />
                        </div>
                        <p className="projelerim-aciklama">{aciklama}</p>
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projelerim-github-link"
                            whileHover={{ color: "#ff99cc", borderColor: "#d2c8e4" }}
                        >
                            GitHub’da İncele
                        </motion.a>

                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Projelerim;
