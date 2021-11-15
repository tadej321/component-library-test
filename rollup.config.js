import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import inject from '@rollup/plugin-inject';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: [
          "@babel/preset-env",
          "@babel/preset-react"
        ],
        plugins: ["babel-plugin-styled-components"]
      }),
      inject({
        React: 'react'
      }),
      external(),
      resolve(),
    ]
  }
]