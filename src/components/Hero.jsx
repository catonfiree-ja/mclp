import styles from './Hero.module.css';
import { Target, ShieldCheck } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.5 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    };

    // 3D Motion Design Setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]), springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const xPct = (e.clientX - rect.left) / width - 0.5;
        const yPct = (e.clientY - rect.top) / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            className={styles.hero}
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            {/* Background elements */}
            <motion.video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className={styles.bgVideo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.0, ease: 'easeOut' }}
            >
                <source src="/hero_bg.mp4" type="video/mp4" />
            </motion.video>
            <div className={styles.overlay}></div>
            <div className={styles.scanline}></div>

            {/* Main Content */}
            <motion.div
                className={styles.heroContent}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.badge} variants={itemVariants}>
                    <ShieldCheck size={14} className={styles.mutedIcon} />
                    <span>{t('hero.badge')}</span>
                </motion.div>

                <motion.h1 className={styles.title} variants={itemVariants}>
                    <span className={styles.titleOffset}>MCLP SHOP</span><br />
                    {t('hero.catalog')}
                </motion.h1>

                <motion.p className={styles.description} variants={itemVariants}>
                    {t('hero.desc')}
                </motion.p>

                <motion.div className={styles.actions} variants={itemVariants}>
                    <button className={styles.primaryBtn} aria-label={t('hero.btnExplore')}>
                        {t('hero.btnExplore')}
                    </button>
                    <button className={styles.secondaryBtn} aria-label={t('hero.btnHeritage')}>
                        {t('hero.btnHeritage')}
                    </button>
                </motion.div>
            </motion.div>

            {/* Floating Glassmorphic Spec Card with 3D Tilt */}
            <motion.div
                className={styles.glassCard}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Wrap content in an inner div pushed out in Z-space for true 3D depth */}
                <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                    <div className={styles.glassHeader}>
                        <span>2026 OFFICIAL LINEUP</span>
                    </div>
                    <div className={styles.glassGrid}>
                        <div>
                            <div className={styles.statLabel}>CATEGORIES</div>
                            <div className={styles.statValue}>12+ UNITS</div>
                        </div>
                        <div>
                            <div className={styles.statLabel}>WARRANTY</div>
                            <div className={styles.statValue}>LIFETIME</div>
                        </div>
                        <div className={styles.fullWidth}>
                            <div className={styles.statLabel}>FEATURED PARTNERS</div>
                            <div className={styles.brandsList}>
                                <span>BENCHMADE</span> • <span>WILEY X</span> • <span>NEXTORCH</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.glassFooter}>
                        <Target size={14} /> TACTICAL EXCELLENCE GUARANTEED
                    </div>
                </div>
            </motion.div>

            {/* HUD System Details */}
            <div className={styles.hudTopLeft}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                >
                    {t('hero.hudVersion')}
                </motion.div>
            </div>
            <div className={styles.hudBottomRight}>
                {t('hero.hudLocation')}
            </div>
        </section>
    );
};

export default Hero;
