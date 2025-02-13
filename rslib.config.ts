import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  lib: [
    {
      format: 'esm',
      syntax: 'es2018',
      autoExternal: false,
      banner: {
        js: `import './index.css';`,
      },
      dts: true,
      source: {
        entry: {
          'nav-icon': './src/nav-icon/index.tsx',
          benchmark: './src/benchmark/index.tsx',
          'tool-stack': './src/tool-stack/index.tsx',
          hero: './src/hero/index.tsx',
          'section-style': './src/section-style/index.tsx',
          'fully-featured': './src/fully-featured/index.tsx',
          'built-with-rspack': './src/built-with-rspack/index.tsx',
          'why-rspack': './src/why-rspack/index.tsx',
          'background-image': './src/background-image/index.tsx',
          announcement: './src/announcement/index.tsx',
        },
      },
    },
    // without banner
    {
      format: 'esm',
      syntax: 'es2018',
      autoExternal: false,
      dts: true,
      source: {
        entry: {
          antd: './src/antd/index.tsx',
        },
      },
    },
  ],
  output: {
    target: 'web',
    externals: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion'],
    filename: {
      js: '[name]/index.js',
      css: '[name]/index.css',
    },
    distPath: {
      css: '',
    },
  },
});
