import peerDepsExternal from 'rollup-plugin-peer-deps-external'; // исключение dev зависимостей
import resolve from '@rollup/plugin-node-resolve'; //
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/esm/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/cjs/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/*.stories.tsx']
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['@babel/plugin-transform-runtime', 'babel-plugin-styled-components'],
      presets: ['@babel/preset-env'],
    }),
    json(),
  ],
  external: ['react', 'react-dom', '@babel/runtime'],
},
{
  input: 'dist/index.d.ts',
  output: [{ file: 'dist/index.d.ts', format: 'esm' }],

}];
