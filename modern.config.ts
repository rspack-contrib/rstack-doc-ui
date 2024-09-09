import {
  type PartialBaseBuildConfig,
  defineConfig,
  moduleTools,
} from '@modern-js/module-tools';

const sharedConfig: PartialBaseBuildConfig = {
  format: 'esm',
  target: 'es6',
  buildType: 'bundle',
  autoExternal: false,
  platform: 'browser',
  dts: false,
  externals: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion'],
  banner: {
    js: `import './index.css';`,
  },
};

export default defineConfig({
  plugins: [moduleTools()],
  buildConfig: [
    {
      ...sharedConfig,
      input: ['./src/nav-icon/index.tsx'],
      outDir: './dist/nav-icon',
    },
    {
      ...sharedConfig,
      input: ['./src/benchmark/index.tsx'],
      outDir: './dist/benchmark',
    },
    {
      ...sharedConfig,
      input: ['./src/tool-stack/index.tsx'],
      outDir: './dist/tool-stack',
    },
    {
      ...sharedConfig,
      input: ['./src/hero/index.tsx'],
      outDir: './dist/hero',
    },
    {
      ...sharedConfig,
      input: ['./src/section-style/index.tsx'],
      outDir: './dist/section-style',
    },
    {
      ...sharedConfig,
      input: ['./src/fully-featured/index.tsx'],
      outDir: './dist/fully-featured',
    },
    {
      ...sharedConfig,
      input: ['./src/built-with-rspack/index.tsx'],
      outDir: './dist/built-with-rspack',
    },
    {
      ...sharedConfig,
      input: ['./src/why-rspack/index.tsx'],
      outDir: './dist/why-rspack',
    },
    {
      ...sharedConfig,
      input: ['./src/background-image/index.tsx'],
      outDir: './dist/background-image',
    },
    {
      ...sharedConfig,
      input: ['./src/announcement/index.tsx'],
      outDir: './dist/announcement',
    },
    {
      buildType: 'bundleless',
      outDir: './dist',
      dts: {
        only: true,
      },
    },
  ],
});
