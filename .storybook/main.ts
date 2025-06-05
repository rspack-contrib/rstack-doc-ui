import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
  framework: 'storybook-react-rsbuild',
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-themes', 'storybook-addon-rslib'],
};

export default config;
