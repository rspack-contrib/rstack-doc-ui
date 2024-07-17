import { NavIcon } from '../dist/nav-icon';
import './index.scss';

export const NavIconStory = () => (
  <div style={{ margin: 20 }}>
    <h2>English</h2>
    <NavIcon lang="en" trigger="click" />

    <h2>中文</h2>
    <NavIcon lang="zh" trigger="click" />
  </div>
);

export default {
  title: 'NavIcon',
};
