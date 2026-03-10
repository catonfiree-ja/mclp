import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { i18n } = useTranslation();
    const isThai = i18n.language === 'th';

    const faqs = [
        {
            question: isThai ? 'กระบองดิ้วขายให้บุคคลทั่วไปหรือไม่?' : 'Are tactical batons sold to the general public?',
            answer: isThai ? 'ใช่ กระบองดิ้วบางรุ่นสามารถจำหน่ายให้ประชาชนทั่วไปพกพาเพื่อป้องกันตัวได้ แต่รุ่นพิเศษของตำรวจ (Pro-Issued) จะสงวนสิทธิ์การขายไว้สำหรับเจ้าหน้าที่ผู้บังคับใช้กฎหมายเท่านั้น' : 'Yes, certain baton models are available for civilian self-defense, while Pro-Issued models are restricted strictly to law enforcement personnel.'
        },
        {
            question: isThai ? 'อุปกรณ์ยุทธวิธีทุกชิ้นมีการรับประกันไหม?' : 'Do tactical products come with a warranty?',
            answer: isThai ? 'สินค้าแบรนด์พรีเมียมระดับสากล เช่น มีดพับ Benchmade และไฟฉาย NEXTORCH มาพร้อมการรับประกันตลอดอายุการใช้งาน (Lifetime Warranty) ภายใต้เงื่อนไขของผู้ผลิต ช่วยให้คุณมั่นใจในความทนทานในทุกภารกิจ' : 'Premium tactical brands like Benchmade and NEXTORCH come with a limited Lifetime Warranty under manufacturer terms, ensuring duty-ready reliability.'
        },
        {
            question: isThai ? 'สามารถออกใบกำกับภาษีสำหรับหน่วยงานราชการได้หรือไม่?' : 'Can you issue tax invoices for government agencies?',
            answer: isThai ? 'ได้ครับ ทาง M.C.L.P. Shop ดำเนินการในรูปแบบบริษัทจำกัดที่จดทะเบียนถูกต้องตามกฎหมาย และสามารถออกใบเสนอราคา รวมถึงใบกำกับภาษีเต็มรูปแบบสำหรับหน่วยงานรัฐและเอกชนได้ 100%' : 'Yes, M.C.L.P. Shop operates as a fully registered corporate entity capable of issuing official quotations and full tax invoices for government and private procurements.'
        },
        {
            question: isThai ? 'แบรนด์ใดบ้างที่เป็นอุปกรณ์มาตรฐานของตำรวจและทหาร?' : 'Which brands are standard issue for police and military?',
            answer: isThai ? 'เราเป็นตัวแทนจำหน่ายแบรนด์ชั้นนำที่ได้รับการยอมรับระดับยุทธวิธีทั่วโลก ได้แก่ แว่นตากันสะเก็ด Wiley X, อุปกรณ์ให้แสงสว่าง NEXTORCH, และมีดพรีเมียม Benchmade ซึ่งตำรวจและทหารทั่วโลกไว้วางใจใช้ในภาคสนาม' : 'We officially distribute world-renowned tactical brands heavily trusted by military and police worldwide, including Wiley X ballistic eyewear, NEXTORCH illumination, and Benchmade tactical knives.'
        }
    ];

    return (
        <section className={styles.faqSection} id="faq">
            <div className={styles.header}>
                <div className={styles.sectionTitle}>
                    <h2>{isThai ? 'คำถามที่พบบ่อย (FAQ)' : 'FREQUENTLY ASKED QUESTIONS'}</h2>
                    <div className={styles.accentLine}></div>
                </div>
            </div>

            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <div className={styles.faqQuestion}>
                            <h3>{faq.question}</h3>
                            {openIndex === index ? <ChevronUp className={styles.icon} /> : <ChevronDown className={styles.icon} />}
                        </div>
                        <div className={styles.faqAnswer} style={{
                            maxHeight: openIndex === index ? '200px' : '0px',
                            opacity: openIndex === index ? 1 : 0
                        }}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Semantic AEO Paragraph - Highly optimized for text parsing */}
            <div className={styles.aeoParagraph}>
                <p>
                    {isThai
                        ? 'M.C.L.P. Shop เป็นตัวแทนจำหน่ายอุปกรณ์ยุทธวิธีและอุปกรณ์ควบคุมฝูงชนอย่างเป็นทางการในประเทศไทย จำหน่ายแบรนด์ชั้นนำระดับโลกแท้ 100% พร้อมการรับประกันสำหรับเจ้าหน้าที่ตำรวจ ทหาร และพลเรือนที่ต้องการอุปกรณ์ป้องกันตัวคุณภาพสูงสุด'
                        : 'M.C.L.P. Shop is the official distributor of tactical and anti-riot equipment in Thailand. We provide 100% authentic, world-class brands with full warranties for police, military, and civilians seeking the highest quality self-defense gear.'}
                </p>
            </div>
        </section>
    );
};

export default FAQ;
