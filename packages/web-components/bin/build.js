
const { rollup } = require('rollup');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');
const path = require('path');

const outputDir = '../../dist/moxie-web-components';


const inputOptions = {
  input: './src/index.ts',
  plugins: [
    resolve({
      extensions: ['.js', '.ts'],
      exportConditions: ['development']
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: path.join(outputDir, 'types'),
      compilerOptions: {
        outDir: outputDir,
        declarationDir: path.join(outputDir, 'types'),
      },
      exclude: [
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.stories.ts'
      ]
    }),
    terser({
      maxWorkers: 1,
      ecma: 2020,
      module: true,
      warnings: true,
      compress: {
        drop_console: false,
        passes: 2
      },
      format: {
        comments: false
      }
    })
  ],
  external: [
    'lit',
    'lit/decorators.js',
    'lit/directive.js',
    'lit/directives/class-map.js',
    'lit/directives/if-defined.js',
    'lit/directives/style-map.js',
    '@lit/reactive-element',
    '@lit/reactive-element/decorators.js'
  ]
};

const outputOptionsList = [
  {
    file: path.join(outputDir, 'index.js'),
    format: 'esm',
    sourcemap: true,
    preserveModules: false
  }
];

(async function build() {
  let bundle;

  try {
    console.log('🔨 Building Lit Web Components...');
    
    // Create a bundle
    bundle = await rollup(inputOptions);

    console.log('📦 Bundle created, generating outputs...');

    // Generate output for each format
    for (const outputOption of outputOptionsList) {
      await bundle.write(outputOption);
      console.log(`✅ Generated ${outputOption.format} output: ${outputOption.file}`);
    }

    console.log('🎉 Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  } finally {
    // Always close the bundle
    if (bundle) {
      await bundle.close();
    }
  }
})();