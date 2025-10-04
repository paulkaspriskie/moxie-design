const { rollup } = require('rollup');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const { readFileSync } = require('fs');

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

// Define output directory
const outputDir = '../../dist/moxie-react';

// Input options
const inputOptions = {
  input: './src/index.ts',
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: outputDir + '/types',
      compilerOptions: {
        outDir: outputDir,
        declarationDir: outputDir + '/types',
        importHelpers: false
      },
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.stories.tsx'
      ]
    }),
    terser({
      maxWorkers: 1,
      compress: {
        drop_console: true,
        passes: 1
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    })
  ],
  external: ['react', 'react-dom']
};

// Output options
const outputOptions = [
  {
    file: outputDir + '/index.cjs.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'named'
  },
  {
    file: outputDir + '/index.esm.js',
    format: 'esm',
    sourcemap: true,
    exports: 'named'
  }
];

// Self-invoking async function
(async function build() {
  let bundle;
  let buildFailed = false;

  try {
    console.log('🔨 Building...');
    
    // Create a bundle
    bundle = await rollup(inputOptions);

    console.log('📦 Bundle created, generating outputs...');

    // Generate output for each format
    for (const outputOption of outputOptions) {
      await bundle.write(outputOption);
      console.log(`✅ Generated ${outputOption.format} output: ${outputOption.file}`);
    }

    console.log('🎉 Build completed successfully!');
  } catch (error) {
    buildFailed = true;
    console.error('❌ Build failed:', error);
    process.exit(1);
  } finally {
    // Always close the bundle
    if (bundle) {
      await bundle.close();
    }
  }
})();