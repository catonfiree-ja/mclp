import styles from './Footer.module.css';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.footerOverlay}></div>
            <div className={styles.container}>

                {/* Branding & About */}
                <div className={styles.brandSection}>
                    <h2 className={styles.logo}>M.C.L.P. <span>SHOP</span></h2>
                    <p className={styles.aboutText}>
                        {t('footer.aboutDesc')}
                    </p>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.linksSection}>
                    <h3 className={styles.columnTitle}>{t('footer.aboutTitle')}</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#home">Home Base</a></li>
                        <li><a href="#shop">Full Arsenal</a></li>
                        <li><a href="#brands">Partner Brands</a></li>
                        <li><a href="#riot-gear">Riot & Tactical</a></li>
                        <li><a href="#">Intel / Blog</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles.contactSection}>
                    <h3 className={styles.columnTitle}>{t('footer.contactTitle')}</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <MapPin size={18} className={styles.icon} />
                            <span>90-92 Trok Khai, Bamrungmuang Rd, Samran Rat, Khet Phra Nakhon, Bangkok 10200</span>
                        </li>
                        <li>
                            <Phone size={18} className={styles.icon} />
                            <span>+66 2 222 0218</span>
                        </li>
                        <li>
                            <Mail size={18} className={styles.icon} />
                            <span>info@mclp-mil.com</span>
                        </li>
                    </ul>

                    <div className={styles.lineOABox}>
                        <span className={styles.lineLabel}>SECURE LINE:</span>
                        <span className={styles.lineId}>@MCLP</span>
                    </div>
                </div>

            </div>

            <div className={styles.copyright}>
                <div className={styles.copyText}>© 2026 M.C.L.P. CO., LTD. {t('footer.rights')}</div>
                <div className={styles.sysStatus}>SYS.STAT: OPTIMAL // END_TRANSMISSION</div>
            </div>
        </footer>
    );
};

export default Footer;
