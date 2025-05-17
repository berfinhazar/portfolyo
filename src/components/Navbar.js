import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navLinks}>
                <li><a href="#anasayfa" style={styles.link}>Ana Sayfa</a></li>
                <li><a href="#benkimim" style={styles.link}>Ben Kimim?</a></li>
                <li><a href="#neler" style={styles.link}>Neler Yapabilirim?</a></li>
                <li><a href="#portfolyo" style={styles.link}>Portfolyo</a></li>
                <li><a href="#iletisim" style={styles.link}>İletişim</a></li>
            </ul>
        </nav>
    );
};


const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#0a0218',
        display: 'flex',
         // Menü sağa yaslanır
        alignItems: 'center',
        padding: '1rem 2rem 1rem 30rem',  // Solda geniş boşluk, sağda az
        color: '#fff',
        zIndex: 1000,
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
    },
    navLinks: {
        listStyle: 'none',
        display: 'flex',
        gap: '2.5rem',
        margin: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5rem',
        fontWeight: '700',
        cursor: 'pointer',
    },
};


export default Navbar;
