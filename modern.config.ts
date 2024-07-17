import {
  moduleTools,
  defineConfig,
  type PartialBaseBuildConfig,
} from '@modern-js/module-tools';

const sharedConfig: PartialBaseBuildConfig = {
  format: 'esm',
  target: 'es6',
  buildType: 'bundle',
  autoExternal: false,
  platform: 'browser',
  dts: false,
  externals: ['react', 'react-dom', 'react/jsx-runtime'],
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
      buildType: 'bundleless',
      outDir: './dist',
      dts: {
        only: true,
      },
    },
  ],
});
