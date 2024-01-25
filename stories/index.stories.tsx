import { RsfamilyNavIcon } from '../dist';
import '../dist/index.css';
import './index.scss';

export const NavIcon = () => (
  <div style={{ margin: 20 }}>
    <h2>English</h2>
    <RsfamilyNavIcon lang="en" trigger="click" />

    <h2>中文</h2>
    <RsfamilyNavIcon lang="zh" trigger="click" />
  </div>
);

export default {
  title: 'NavIcon',
};
