import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import VideoShowcase from './components/VideoShowcase';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const isThai = i18n.language === 'th';

  const siteTitle = isThai
    ? 'M.C.L.P. Shop - ตัวแทนจำหน่ายอุปกรณ์ยุทธวิธีและควบคุมฝูงชนอย่างเป็นทางการ | ประเทศไทย'
    : 'M.C.L.P. Shop - Authorized Tactical & Anti-Riot Gear Distributor | Thailand';

  const siteDesc = isThai
    ? 'จัดจำหน่ายอุปกรณ์ทางทหาร มีดยุทธวิธี ไฟฉาย ปราบจลาจล แบรนด์ชั้นนำ Benchmade, Nextorch, Wiley X ของแท้ 100% พร้อมการรับประกัน'
    : 'Official distributor of military gear, tactical knives, flashlights, and anti-riot equipment. Featuring Benchmade, Nextorch, Wiley X. 100% authentic with warranty.';

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'M.C.L.P. Shop',
    url: 'https://mclp-shop.com',
    logo: 'https://mclp-shop.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+66-2-222-0218',
      contactType: 'customer service',
      availableLanguage: ['Thai', 'English']
    },
    sameAs: [
      'https://www.facebook.com/mclp'
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isThai ? 'กระบองดิ้วขายให้บุคคลทั่วไปหรือไม่?' : 'Are tactical batons sold to the general public?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isThai ? 'ใช่ กระบองดิ้วบางรุ่นสามารถจำหน่ายให้ประชาชนทั่วไปพกพาเพื่อป้องกันตัวได้ แต่รุ่นพิเศษของตำรวจ (Pro-Issued) จะสงวนสิทธิ์การขายไว้สำหรับเจ้าหน้าที่ผู้บังคับใช้กฎหมายเท่านั้น' : 'Yes, certain baton models are available for civilian self-defense, while Pro-Issued models are restricted strictly to law enforcement personnel.'
        }
      },
      {
        '@type': 'Question',
        name: isThai ? 'อุปกรณ์ยุทธวิธีทุกชิ้นมีการรับประกันไหม?' : 'Do tactical products come with a warranty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isThai ? 'สินค้าแบรนด์พรีเมียมระดับสากล เช่น มีดพับ Benchmade และไฟฉาย NEXTORCH มาพร้อมการรับประกันตลอดอายุการใช้งาน (Lifetime Warranty) ภายใต้เงื่อนไขของผู้ผลิต ช่วยให้คุณมั่นใจในความทนทานในทุกภารกิจ' : 'Premium tactical brands like Benchmade and NEXTORCH come with a limited Lifetime Warranty under manufacturer terms, ensuring duty-ready reliability.'
        }
      },
      {
        '@type': 'Question',
        name: isThai ? 'สามารถออกใบกำกับภาษีสำหรับหน่วยงานราชการได้หรือไม่?' : 'Can you issue tax invoices for government agencies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isThai ? 'ได้ครับ ทาง M.C.L.P. Shop ดำเนินการในรูปแบบบริษัทจำกัดที่จดทะเบียนถูกต้องตามกฎหมาย และสามารถออกใบเสนอราคา รวมถึงใบกำกับภาษีเต็มรูปแบบสำหรับหน่วยงานรัฐและเอกชนได้ 100%' : 'Yes, M.C.L.P. Shop operates as a fully registered corporate entity capable of issuing official quotations and full tax invoices for government and private procurements.'
        }
      },
      {
        '@type': 'Question',
        name: isThai ? 'แบรนด์ใดบ้างที่เป็นอุปกรณ์มาตรฐานของตำรวจและทหาร?' : 'Which brands are standard issue for police and military?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isThai ? 'เราเป็นตัวแทนจำหน่ายแบรนด์ชั้นนำที่ได้รับการยอมรับระดับยุทธวิธีทั่วโลก ได้แก่ แว่นตากันสะเก็ด Wiley X, อุปกรณ์ให้แสงสว่าง NEXTORCH, และมีดพรีเมียม Benchmade ซึ่งตำรวจและทหารทั่วโลกไว้วางใจใช้ในภาคสนาม' : 'We officially distribute world-renowned tactical brands heavily trusted by military and police worldwide, including Wiley X ballistic eyewear, NEXTORCH illumination, and Benchmade tactical knives.'
        }
      }
    ]
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'M.C.L.P. Shop',
    url: 'https://mclp-shop.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://mclp-shop.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mclp-shop.com" />
        <meta property="og:site_name" content="M.C.L.P. Shop" />
        <meta property="og:image" content="https://mclp-shop.com/logo.png" />
        <meta property="og:locale" content={isThai ? 'th_TH' : 'en_US'} />
        <meta property="og:locale:alternate" content={isThai ? 'en_US' : 'th_TH'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDesc} />
        <meta name="twitter:image" content="https://mclp-shop.com/logo.png" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://mclp-shop.com" />

        {/* AEO Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(webSiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(orgSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <main>
        <VideoShowcase
          videoSrc="/assets/videos/police/police-1.mp4"
          title={t('showcase.policeTitle')}
          subtitle={t('showcase.policeSubtitle')}
          align="left"
        />
        <VideoShowcase
          videoSrc="/assets/videos/camping/camping-1.mp4"
          title={t('showcase.outdoorTitle')}
          subtitle={t('showcase.outdoorSubtitle')}
          align="right"
        />
        <ProductGrid />
      </main>
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
