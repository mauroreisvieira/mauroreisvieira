const fs = require('fs');
const path = require('path');
const glob = require('glob');
const render = require('repng');

const run = async (Component, opts) => {
    const image = await render(Component, opts);
    if (!fs.existsSync(opts.outDir)){
        fs.mkdirSync(opts.outDir);
    }
    const outPath = path.join(opts.outDir, opts.filename);
    const file = fs.createWriteStream(outPath);
    file.write(image);
};

glob('src/og/*.js', function (_, files) {
    files.forEach((file) => {
        const filename = path.basename(file, path.extname(file));
        const filepath = path.join(__dirname, `../../${file}`);
        const Component = require(filepath).default || require(filepath);

        run(Component, {
            outDir: 'public/static/og',
            filename: `${filename}.png`,
        });
    });
});
