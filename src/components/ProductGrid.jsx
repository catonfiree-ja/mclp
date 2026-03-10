import styles from './ProductGrid.module.css';
import productsData from '../data/products.json';
import { ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TiltCard = ({ product, cardVariants, t, i18n }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]), springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const isThai = i18n.language === 'th';

    return (
        <motion.div
            className={styles.card}
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
        >
            {product.isFeatured && <div className={styles.featuredBadge}>{t('shop.badgePro')}</div>}

            <div className={styles.imageWrapper} style={{ transform: "translateZ(30px)" }}>
                <img src={product.image} alt={isThai && product.nameTh ? product.nameTh : product.name} loading="lazy" />
            </div>

            <div className={styles.content} style={{ transform: "translateZ(20px)" }}>
                <div className={styles.metaRow}>
                    <span className={styles.category}>// {product.category.toUpperCase()}</span>
                </div>
                <h3 className={styles.name}>{isThai && product.nameTh ? product.nameTh : product.name}</h3>
                <p className={styles.desc}>{isThai && product.descriptionTh ? product.descriptionTh : product.description}</p>

                <div className={styles.footer}>
                    <span className={styles.price}>
                        <span className={styles.currencySymbol}>฿</span>{product.price.toLocaleString('th-TH')}
                    </span>
                    <button className={styles.addBtn} aria-label={`Add ${isThai && product.nameTh ? product.nameTh : product.name} to cart`}>
                        {t('shop.btnAcquire')}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};


const ProductGrid = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const { t, i18n } = useTranslation();

    const filteredProducts = productsData.filter(product => {
        if (activeFilter === 'ALL') return true;
        if (activeFilter === 'KNIVES' && product.category === 'Knives') return true;
        if (activeFilter === 'LIGHTS' && product.category === 'Light') return true;
        if (activeFilter === 'ANTI-RIOT' && product.category === 'Anti-Riot Gear') return true;
        if (activeFilter === 'POLICE' && product.category === 'Police') return true;
        if (activeFilter === 'OUTDOOR' && product.category === 'Outdoor') return true;
        return false;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20 } }
    };

    return (
        <section className={styles.shopSection} id="shop">
            <div className={styles.header}>
                <div className={styles.sectionTitle}>
                    <h2>{t('shop.title1')}<span>{t('shop.title2')}</span></h2>
                    <div className={styles.accentLine}></div>
                </div>
                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'ALL' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('ALL')}
                    >{t('shop.filterAll')}</button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'KNIVES' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('KNIVES')}
                    >{t('shop.filterKnives')}</button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'LIGHTS' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('LIGHTS')}
                    >{t('shop.filterLights')}</button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'ANTI-RIOT' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('ANTI-RIOT')}
                    >{t('shop.filterAntiRiot')}</button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'POLICE' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('POLICE')}
                    >{t('shop.filterPolice')}</button>
                    <button
                        className={`${styles.filterBtn} ${activeFilter === 'OUTDOOR' ? styles.active : ''}`}
                        onClick={() => setActiveFilter('OUTDOOR')}
                    >{t('shop.filterOutdoor')}</button>
                </div>
            </div>

            <motion.div
                key={activeFilter}
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
            >
                {filteredProducts.map((product) => (
                    <TiltCard key={product.id} product={product} cardVariants={cardVariants} t={t} i18n={i18n} />
                ))}
            </motion.div>

            <div className={styles.viewAllWrapper}>
                <a href="#shop" className={styles.viewAllLink} aria-label={t('shop.viewAll')}>
                    {t('shop.viewAll')}
                    <span className={styles.linkArrow}>&rarr;</span>
                </a>
            </div>
        </section>
    );
};

export default ProductGrid;
