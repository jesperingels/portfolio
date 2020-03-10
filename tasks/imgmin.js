const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
 
(async () => {
    const files = await imagemin(['public/img-in/*.{jpg,png,jpeg,gif,svg}'], {
        destination: 'public/img',
        plugins: [
            imageminMozjpeg(
                {quality: 65}
                ),
            imageminGifsicle(),
            imageminPngquant({
                quality: [0.6, 0.8]
            })
        ]
    });
 
    console.log('Images optimized!');
})();