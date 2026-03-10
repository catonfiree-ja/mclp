import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "nav": {
                "home": "HOME",
                "shop": "SHOP",
                "brands": "BRANDS",
                "antiRiot": "ANTI-RIOT GEAR",
                "contact": "CONTACT US"
            },
            "hero": {
                "badge": "MIL-SPEC STANDARDS // AUTHORIZED DISTRIBUTOR",
                "catalog": "TACTICAL CATALOG",
                "desc": "Equipping elite operatives, law enforcement, and outdoor professionals with uncompromising equipment. Engineered for deployment. Built to survive.",
                "btnExplore": "EXPLORE INVENTORY",
                "btnHeritage": "OUR HERITAGE",
                "specHeader": "2026 OFFICIAL LINEUP",
                "specCat": "CATEGORIES",
                "specUnits": "12+ UNITS",
                "specWarranty": "WARRANTY",
                "specLifetime": "LIFETIME",
                "specPartners": "FEATURED PARTNERS",
                "specGuarantee": "TACTICAL EXCELLENCE GUARANTEED",
                "hudVersion": "// CATALOG: V.26.01",
                "hudLocation": "M.C.L.P. SHOP // BANGKOK, THAILAND"
            },
            "shop": {
                "title1": "TACTICAL GEAR // ",
                "title2": "INSPECT",
                "filterAll": "ALL",
                "filterKnives": "KNIVES",
                "filterLights": "LIGHTS",
                "filterAntiRiot": "ANTI-RIOT",
                "filterPolice": "POLICE",
                "filterOutdoor": "OUTDOOR",
                "badgePro": "PRO ISSUED",
                "btnAcquire": "ACQUIRE",
                "viewAll": "ACCESS FULL DATABASE"
            },
            "showcase": {
                "policeTitle": "LAW ENFORCEMENT",
                "policeSubtitle": "TACTICAL RESPONSE UNITS",
                "outdoorTitle": "OUTDOOR SURVIVAL",
                "outdoorSubtitle": "EXPEDITION & CAMPING"
            },
            "footer": {
                "aboutTitle": "COMMAND CENTER",
                "aboutDesc": "Premier tactical equipment distributor in Thailand. Providing mil-spec gear for professionals and enthusiasts since 2010.",
                "quickLinks": "OPERATIONAL LINKS",
                "contactTitle": "COMMUNICATIONS",
                "rights": "ALL RIGHTS RESERVED.",
                "location": "BANGKOK, THAILAND"
            }
        }
    },
    th: {
        translation: {
            "nav": {
                "home": "หน้าหลัก",
                "shop": "ร้านค้า",
                "brands": "แบรนด์",
                "antiRiot": "อุปกรณ์ควบคุมฝูงชน",
                "contact": "ติดต่อเรา"
            },
            "hero": {
                "badge": "มาตรฐานทางทหาร // ตัวแทนจำหน่ายอย่างเป็นทางการ",
                "catalog": "แคตตาล็อกอุปกรณ์ยุทธวิธี",
                "desc": "จัดหาอุปกรณ์คุณภาพสูงสุดสำหรับหน่วยรบพิเศษ เจ้าหน้าที่บังคับใช้กฎหมาย และผู้เชี่ยวชาญด้านยุทธวิธี ออกแบบมาเพื่อการปฏิบัติการจริง สร้างมาเพื่อความอยู่รอด",
                "btnExplore": "ดูสินค้าทั้งหมด",
                "btnHeritage": "ประวัติของเรา",
                "specHeader": "รายการสินค้าอย่างเป็นทางการ 2026",
                "specCat": "หมวดหมู่",
                "specUnits": "12+ ประเภท",
                "specWarranty": "การรับประกัน",
                "specLifetime": "ตลอดอายุการใช้งาน",
                "specPartners": "แบรนด์พาร์ทเนอร์",
                "specGuarantee": "รับประกันความเป็นเลิศทางยุทธวิธี",
                "hudVersion": "// แคตตาล็อก: V.26.01",
                "hudLocation": "M.C.L.P. SHOP // กรุงเทพมหานคร, ประเทศไทย"
            },
            "shop": {
                "title1": "ยุทโธปกรณ์ // ",
                "title2": "ตรวจสอบ",
                "filterAll": "ทั้งหมด",
                "filterKnives": "มีดยุทธวิธี",
                "filterLights": "ไฟฉาย",
                "filterAntiRiot": "ปราบจลาจล",
                "filterPolice": "เจ้าหน้าที่ตำรวจ",
                "filterOutdoor": "แคมป์ปิ้ง / เดินป่า",
                "badgePro": "สเปกเจ้าหน้าที่",
                "btnAcquire": "สั่งซื้อ",
                "viewAll": "เข้าสู่ฐานข้อมูลทั้งหมด"
            },
            "showcase": {
                "policeTitle": "อุปกรณ์ระดับปฏิบัติการ",
                "policeSubtitle": "หน่วยบังคับใช้กฎหมาย",
                "outdoorTitle": "ผจญภัยและเอาชีวิตรอด",
                "outdoorSubtitle": "อุปกรณ์เดินป่าระดับมืออาชีพ"
            },
            "footer": {
                "aboutTitle": "ศูนย์บัญชาการ",
                "aboutDesc": "ตัวแทนจำหน่ายอุปกรณ์ทางยุทธวิธีชั้นนำในประเทศไทย จัดหาอุปกรณ์ระดับมาตรฐานทหารสำหรับผู้เชี่ยวชาญและผู้ใช้งานทั่วไปตั้งแต่ปี 2010",
                "quickLinks": "ลิงก์ปฏิบัติการ",
                "contactTitle": "การสื่อสาร",
                "rights": "สงวนลิขสิทธิ์",
                "location": "กรุงเทพมหานคร, ประเทศไทย"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "th", // default language is Thai for AEO targeting
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
