const fs = require('fs');
const path = require('path');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const inputFile = path.resolve(__dirname, '../src/css/index.css');
const outputDir = path.resolve(__dirname, '../../../dist/moxie-styles');
const outputFile = path.join(outputDir, 'index.css');
const outputMapFile = path.join(outputDir, 'index.css.map');


if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}


fs.readFile(inputFile, (err, css) => {
  if (err) console.log(err);
  postcss([autoprefixer])
    .process(css, { from: inputFile, to: outputFile })
    .then(result => {
      console.log(result.css);
      fs.writeFile(outputFile, result.css, (err) => {
        if (err) console.log(err);
      });
      if ( result.map ) {
        fs.writeFile(outputMapFile, result.map.toString(), () => true)
      }
    })
});