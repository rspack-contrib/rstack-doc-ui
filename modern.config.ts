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
      buildType: 'bundleless',
      outDir: './dist',
      dts: {
        only: true,
      },
    },
  ],
});
