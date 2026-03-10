import { Search, ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'th' ? 'en' : 'th';
        i18n.changeLanguage(newLang);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Logo */}
                <a href="/" className={styles.logo}>
                    <img src="/logo_v5_colortoalpha.png" alt="M.C.L.P. SHOP" className={styles.logoImg} />
                </a>

                {/* Main Navigation Links */}
                <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <a href="#home" className={styles.navLink}>{t('nav.home')}</a>
                    <a href="#shop" className={styles.navLink}>{t('nav.shop')}</a>
                    <a href="#brands" className={styles.navLink}>{t('nav.brands')}</a>
                    <a href="#riot-gear" className={styles.navLink}>{t('nav.antiRiot')}</a>
                    <a href="#contact" className={styles.navLink}>{t('nav.contact')}</a>
                </div>

                {/* Action Icons */}
                <div className={styles.navActions}>
                    <button className={styles.actionBtn} onClick={toggleLanguage} aria-label="Toggle Language" title="Switch between Thai and English">
                        <Globe size={22} style={{ marginRight: '4px' }} />
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                            {i18n.language === 'th' ? 'EN' : 'TH'}
                        </span>
                    </button>
                    <button className={styles.actionBtn} aria-label="Search">
                        <Search size={22} />
                    </button>
                    <button className={`${styles.actionBtn} ${styles.hideMobile}`} aria-label="User Account">
                        <User size={22} />
                    </button>
                    <button className={styles.actionBtn} aria-label="Shopping Cart">
                        <ShoppingCart size={22} />
                        <span className={styles.cartCount}>0</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
