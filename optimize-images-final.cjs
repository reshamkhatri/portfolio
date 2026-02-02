const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const publicDir = 'd:/portdolio/public';
const files = fs.readdirSync(publicDir);

const allImages = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return (ext === '.jpg' || ext === '.jpeg' || ext === '.png');
});

console.log(`Optimizing ${allImages.length} images for peak performance...`);

async function optimize() {
    for (const file of allImages) {
        const filePath = path.join(publicDir, file);
        try {
            const image = await Jimp.read(filePath);

            // Limit everything to 800px max - perfect for web viewing
            if (image.bitmap.width > 800) {
                console.log(`Resizing ${file} to 800px width`);
                image.resize({ w: 800 });
            }

            // The quality method should be available on the image object if it's there
            // If not, resizing to 800px will already save a TON of space
            if (typeof image.quality === 'function') {
                image.quality(70);
            }

            await image.write(filePath);
            console.log(`Optimized ${file}`);
        } catch (err) {
            console.error(`Error with ${file}:`, err);
        }
    }
    console.log('All images optimized!');
}

optimize();
