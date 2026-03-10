const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const products = [
    {
        id: "nex-23c",
        url: "https://mclp-shop.com/product/nextorch-nex-quicker-baton-23-quicker-series-rapid-deploy-baton-duty-grade-model-n23c/"
    },
    {
        id: "acme-12",
        url: "https://mclp-shop.com/product/acme-boatswain-pipe122/"
    },
    {
        id: "anti-riot-suit",
        url: "https://mclp-shop.com/product/anti-riot-suit/"
    },
    {
        id: "anti-riot-helmet",
        url: "https://mclp-shop.com/product/anti-riot-helmet/"
    },
    {
        id: "wiley-x-saber",
        url: "https://mclp-shop.com/product/saber-advanced-matte-black-frame-clear-lens/"
    },
    {
        id: "benchmade-535",
        url: "https://mclp-shop.com/product/535/"
    },
    {
        id: "buck-110",
        url: "https://mclp-shop.com/product/110-folding-hunter/"
    },
    {
        id: "nextorch-ta30",
        url: "https://mclp-shop.com/product/ta30/"
    }
];

const outDir = path.join(__dirname, 'public', 'products');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
    console.log('Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    for (const p of products) {
        console.log(`Extracting [${p.id}]...`);
        try {
            await page.goto(p.url, { waitUntil: 'load', timeout: 30000 });
            // The main product image usually has this class in WooCommerce
            const imgLocator = page.locator('.woocommerce-product-gallery__image img').first();
            await imgLocator.waitFor({ state: 'visible', timeout: 10000 });
            await imgLocator.screenshot({ path: path.join(outDir, `${p.id}.png`), omitBackground: true });
            console.log(`✅ Saved ${p.id}.png`);
        } catch (err) {
            console.error(`❌ Failed to extract ${p.id}: ${err.message}`);
        }
    }

    await browser.close();
    console.log('Extraction complete.');
})();
