const fs = require("fs");
const path = require("path");
const autoprefixer = require("autoprefixer");
const postcss = require("postcss");
const cssnano = require("cssnano");

const inputFile = path.resolve(__dirname, "../src/css/index.css");
const outputDir = path.resolve(__dirname, "../../../dist/moxie-styles");
const outputFile = path.join(outputDir, "index.css");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readFile(inputFile, (err, css) => {
  if (err) console.log(err);
  postcss([autoprefixer, cssnano])
    .process(css, { from: inputFile, to: outputFile })
    .then((result) => {
      fs.writeFile(outputFile, result.css, (err) => {
        if (err) console.log(err);
      });
    });
});
