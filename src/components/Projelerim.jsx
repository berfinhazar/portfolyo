import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

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
            style={styles.container}
        >
            <h2 style={styles.baslik}>Projelerim</h2>
            <div style={styles.grid}>
                {projeler.map(({ id, isim, animasyon, aciklama, github }, index) => (
                    <motion.div
                        key={id}
                        style={{
                            ...styles.card,
                            marginLeft: index % 2 === 0 ? "1.5rem" : 0, // Proje 1 ve 3 sağdan başlasın
                        }}
                        whileHover="hover"
                        variants={cardVariants}
                    >
                        <h3 style={styles.projeBaslik}>{isim}</h3>
                        <div style={styles.animasyonWrapper}>
                            <Lottie animationData={animasyon} loop={true} />
                        </div>
                        <p style={styles.aciklama}>{aciklama}</p>
                        <motion.a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.githubLink}
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

const styles = {
    container: {
        padding: "4rem 2rem",
        minHeight: "100vh",

        marginLeft: "300px",
    },
    baslik: {
        textAlign: "center",
        fontSize: "3rem",
        marginBottom: "3rem",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "3.5rem 3rem", // dikeyde ve yatayda daha fazla boşluk
        justifyItems: "center",
    },

    card: {
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        padding: "1.5rem",
        borderRadius: "16px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "450px", // daha küçük kart
        width: "100%",
        transition: "all 0.3s ease-in-out",
    },

    projeBaslik: {
        fontSize: "1.8rem",
        marginBottom: "1rem",
    },
    animasyonWrapper: {
        width: "100%",
        maxWidth: "250px",
        marginBottom: "1rem",
    },
    aciklama: {
        fontSize: "1rem",
        marginBottom: "1.5rem",
    },
    githubLink: {
        color: "#d2c8e4",            // başlangıç rengi
        textDecoration: "none",
        fontWeight: "700",
        border: "2px solid #d2c8e4", // başlangıç border rengi
        padding: "0.5rem 1rem",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
    },

    githubLinkHover: {
        color: "#d2c8e4",
    },
};


export default Projelerim;
