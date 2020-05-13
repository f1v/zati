import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import multi from '@rollup/plugin-multi-entry';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
  // Browser-friendly UMD build
  {
    input: 'src/components/**/*.tsx',
    output: {
      name: 'zati',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      multi(),
      resolve(), // so Rollup can find all packages
      commonjs(), // so Rollup can convert packages to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/components/**/*.tsx',
    external: ['lodash', 'react', 'styled-system'],
    plugins: [multi(), typescript()],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
