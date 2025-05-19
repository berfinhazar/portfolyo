import React from 'react';
import Lottie from 'lottie-react';
import printerAnim from './animasyon/printer.json';
import oyunAnim from './animasyon/oyun.json';
import tasarimAnim from './animasyon/sosyal.json';

const NelerYapabilirim = () => {
    return (
        <section id="neler" style={styles.container}>
            <h2 style={styles.baslik}>Neler Yapacağım?</h2>

            {/* 3D Printer Kartı */}
            <div style={styles.card}>
                <div style={styles.animation}>
                    <Lottie animationData={printerAnim} loop={true} />
                </div>
                <div style={styles.content}>
                    <h3>3D Yazıcı Geliştirme</h3>
                    <p>
                        Elimde halihazırda bir 3D yazıcım var. Bu yazıcının Y ekseni maksimum 35-40 cm arasında baskı alabiliyor.
                        Şu anki hedefim, bu sınırı aşarak Y eksenini 80-100 cm’ye kadar çıkarmak.
                        Bunu yapabilmek için genişletilmiş bir tabla sistemi, daha uzun lineer raylar ve yüksek torklu motorlar entegre etmeyi planlıyorum.
                        Ayrıca yazılım tarafında da özel dilimleme ayarları ile bu büyük baskıların verimli şekilde alınmasını sağlayacağım.
                    </p>
                    <a
                        href="https://www.instagram.com/printerestingcreativ3d"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        3D Printer sayfama göz atmak ister misin?
                    </a>
                </div>
            </div>

            {/* Oyun Geliştirme Kartı */}
            <div style={styles.card}>
                <div style={styles.animation}>
                    <Lottie animationData={oyunAnim} loop={true} />
                </div>
                <div style={styles.content}>
                    <h3>2D Oyun Geliştirme</h3>
                    <p>
                        Şu an 2D tasarıma sahip bir oyun projesi üzerinde çalışıyorum. Bu oyunda yaratıcı mekanikler ve kullanıcı dostu bir arayüz yer alacak.
                        Oyun tamamlandığında, Steam üzerinden satışa sunmayı hedefliyorum.
                        Bu süreçte oyun motoru olarak Godot ya da Unity gibi platformlardan birini kullanacağım.
                    </p>
                </div>
            </div>

            {/* Tasarım Kartı */}
            <div style={styles.card}>
                <div style={styles.animation}>
                    <Lottie animationData={tasarimAnim} loop={true} />
                </div>
                <div style={styles.content}>
                    <h3>Network</h3>
                    <p>
                        Teknik becerilerimi yalnızca derslerle sınırlı bırakmıyor, sosyal gönüllülük esaslı projelerde ve teknik etkinliklerde aktif rol alıyorum. Bu etkinlikler sayesinde hem kendimi geliştiriyor hem de farklı alanlardan insanlarla tanışarak güçlü bir network oluşturuyorum.
                    </p>
                    <p>Gönüllü çalışmalar, takım ruhu ve sorumluluk alma gibi becerilerimi artırırken; teknik seminerler ve atölyelerle güncel teknolojileri yakından takip ediyorum. Bu sayede hem sosyal yönümü hem de teknik altyapımı dengeli bir şekilde güçlendiriyorum.
                        Gelecek planımda da akedemik serüvenim boyunca buna devam etmeyi hedefliyorum.
                    </p>

                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
        padding: '6rem 2rem',
        minHeight: '100vh',


        animation: 'bgAnim 12s ease infinite',
        color: '#fff',
        marginLeft: '300px',
    },
    baslik: {
        fontSize: '2.5rem',
        textAlign: 'center',
        marginBottom: '3rem'

    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
    },
    animation: {
        flex: '0 0 200px',
        maxWidth: '200px',
    },
    content: {
        flex: 1,
        minWidth: '250px',
        fontSize: '1.1rem',
        lineHeight: '1.6',
    },
    link: {
        marginTop: '1rem',
        display: 'inline-block',
        color: '#84c5ff',
        textDecoration: 'underline',
        fontWeight: 'bold',
    },
};

export default NelerYapabilirim;
