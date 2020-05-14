import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';

export default {
  external: ['lodash', 'react', 'react-dom', 'react-proptypes'],
  input: ['src/components/**/*.tsx'],
  output: {
    name: 'zati',
    file: 'lib/index.js',
    format: 'esm',
  },
  plugins: [
    multi(),
    resolve(), //  find all packages
    postcss({
      modules: true,
      extract: false,
    }),
    commonjs(),
    typescript(),
  ],
};
