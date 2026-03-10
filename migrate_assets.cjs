const fs = require('fs');
const path = require('path');

const downloadsCampingDir = 'C:\\Users\\USER\\Downloads\\M.C.L.P ป่า อุปกรณ์แค้ม';
const downloadsPoliceDir = 'C:\\Users\\USER\\Downloads\\M.C.L.P ตำรวจ';

const targetAssetsDir = 'C:\\Users\\USER\\.gemini\\antigravity\\scratch\\mclp_nextgen\\public\\assets';
const targetVideosDir = path.join(targetAssetsDir, 'videos');
const targetImagesDir = path.join(targetAssetsDir, 'images');

const dirsToCreate = [
    targetVideosDir,
    path.join(targetVideosDir, 'camping'),
    path.join(targetVideosDir, 'police'),
    path.join(targetImagesDir, 'camping'),
    path.join(targetImagesDir, 'police')
];

dirsToCreate.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

function slugify(text) {
    return text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function processDirectory(sourceDir, targetCategory) {
    if (!fs.existsSync(sourceDir)) {
        console.error(`Source directory not found: ${sourceDir}`);
        return;
    }

    const files = fs.readdirSync(sourceDir);
    files.forEach((file, index) => {
        const ext = path.extname(file).toLowerCase();
        const sourceFile = path.join(sourceDir, file);

        // Create a clean filename
        const cleanName = `${targetCategory}-${index + 1}${ext}`;

        let targetFile = '';
        if (ext === '.mp4' || ext === '.webm') {
            targetFile = path.join(targetVideosDir, targetCategory, cleanName);
        } else if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
            targetFile = path.join(targetImagesDir, targetCategory, cleanName);
        }

        if (targetFile) {
            fs.copyFileSync(sourceFile, targetFile);
            console.log(`Copied ${file} -> ${targetCategory}/${cleanName}`);
        }
    });
}

processDirectory(downloadsCampingDir, 'camping');
processDirectory(downloadsPoliceDir, 'police');

console.log('Asset migration completed successfully!');
