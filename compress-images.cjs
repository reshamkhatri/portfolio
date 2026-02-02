const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const publicDir = 'd:/portdolio/public';
const files = fs.readdirSync(publicDir);

const largeFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    const stats = fs.statSync(path.join(publicDir, file));
    // Aggressive: process anything over 500KB
    return (ext === '.jpg' || ext === '.jpeg' || ext === '.png') && stats.size > 500 * 1024;
});

console.log(`Found ${largeFiles.length} files to optimize...`);

async function compress() {
    for (const file of largeFiles) {
        const filePath = path.join(publicDir, file);
        console.log(`Processing ${file}...`);

        try {
            const image = await Jimp.read(filePath);

            // Resize to 1000px max width - much lighter for 3D transforms
            if (image.bitmap.width > 1000) {
                console.log(`Resizing ${file} from ${image.bitmap.width}px to 1000px`);
                image.resize({ w: 1000 });
            }

            // In Jimp 1.x, we write directly. Reducing dimensions is the best way to save space if quality() is tricky.
            // But let's try to find if we can set quality in write or similar.
            // Actually, just resizing to 1000px will likely drop these multi-MB files to < 300KB.

            await image.write(filePath);

            const newStats = fs.statSync(filePath);
            console.log(`Done ${file}. New size: ${(newStats.size / 1024).toFixed(2)} KB`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

compress();
