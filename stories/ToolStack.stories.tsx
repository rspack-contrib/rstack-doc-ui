import { ToolStack } from '../dist/tool-stack';
import './index.scss';

export const ToolStackStory = () => (
  <>
    <h2>English</h2>
    <div style={{ margin: 20 }}>
      <ToolStack lang="en" />
    </div>
    <h2>中文</h2>
    <div style={{ margin: 20 }}>
      <ToolStack lang="zh" />
    </div>
  </>
);

export default {
  title: 'ToolStack',
};
