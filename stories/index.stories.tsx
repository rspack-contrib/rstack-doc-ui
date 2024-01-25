import { WebInfraNavIcon } from '../dist/es/index';
import './index.scss';

export const NavIcon = () => (
  <div style={{ margin: 20 }}>
    <h2>中文</h2>
    <WebInfraNavIcon lang="zh" trigger="click" useLocalConfig />

    <h2>English</h2>
    <WebInfraNavIcon lang="en" trigger="click" useLocalConfig />
  </div>
);

export default {
  title: 'NavIcon',
};
