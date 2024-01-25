import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildConfig: [
    {
      format: 'esm',
      target: 'es6',
      buildType: 'bundleless',
      outDir: './dist/es',
      copy: {
        patterns: [{ from: './nav-config.json' }],
      },
    },
    {
      buildType: 'bundleless',
      outDir: './dist/types',
      dts: {
        only: true,
      },
    },
  ],
});
