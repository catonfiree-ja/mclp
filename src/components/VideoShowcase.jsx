import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './VideoShowcase.module.css';

const VideoShowcase = ({ videoSrc, title, subtitle, align = 'left' }) => {
    const { t } = useTranslation();

    return (
        <section className={styles.showcase}>
            <div className={styles.videoWrapper}>
                <video
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className={styles.videoBg}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={`${styles.content} ${align === 'right' ? styles.alignRight : styles.alignLeft}`}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className={styles.subtitle}>// {subtitle}</span>
                    <h2 className={styles.title}>{title}</h2>
                    <button className={styles.actionBtn} aria-label={t('hero.btnExplore', 'EXPLORE INVENTORY')}>
                        {t('hero.btnExplore', 'EXPLORE INVENTORY')}
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;
