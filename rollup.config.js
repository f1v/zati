import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  external: ['lodash', 'react', 'react-proptypes'],
  input: 'src/components/**/*.tsx',
  output: {
    name: 'zati',
    file: 'lib/bundle.js',
    format: 'cjs',
  },
  plugins: [
    multi(),
    resolve(), // so Rollup can find all packages
    typescript(), // so Rollup can convert TypeScript to JavaScript
  ],
};
