import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildConfig: [
    {
      format: 'esm',
      target: 'es6',
      buildType: 'bundle',
      outDir: './dist',
      autoExternal: false,
      platform: 'browser',
      dts: false,
      externals: ['react', 'react-dom', 'react/jsx-runtime'],
      copy: {
        patterns: [{ from: './nav-config.json' }],
      },
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
