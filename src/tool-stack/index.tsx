import type React from 'react';
import { memo } from 'react';
import {
  descStyle,
  innerContainerStyle,
  titleAndDescStyle,
  titleStyle,
} from '../section-style';
import styles from './index.module.scss';

export const ToolStack: React.FC<{ lang: string }> = memo(({ lang }) => {
  const isEn = lang === 'en';
  const tools = [
    {
      name: 'Rspack',
      desc: isEn
        ? 'A high performance JavaScript bundler written in Rust, with webpack-compatible API'
        : '基于 Rust 编写的高性能 JavaScript 打包工具，具备与 webpack 兼容的 API',
      logo: 'https://assets.rspack.dev/rspack/rspack-logo.svg',
      url: 'https://rspack.dev',
      urlText: 'rspack.dev',
    },
    {
      name: 'Rsbuild',
      desc: isEn
        ? 'An Rspack-based build tool that provides out-of-the-box setup'
        : '基于 Rspack 的构建工具，包含开箱即用的预设配置，带来愉悦的开发体验',
      logo: 'https://assets.rspack.dev/rsbuild/rsbuild-logo.svg',
      url: 'https://rsbuild.dev',
      urlText: 'rsbuild.dev',
    },
    {
      name: 'Rslib',
      desc: isEn
        ? 'A Rsbuild-based library development tool for creating libraries and UI components'
        : '基于 Rsbuild 的库开发工具，以简单的方式创建 JavaScript 库和 UI 组件库',
      logo: 'https://assets.rspack.dev/rslib/rslib-logo.svg',
      url: 'https://lib.rsbuild.dev',
      urlText: 'lib.rsbuild.dev',
    },
    {
      name: 'Rspress',
      desc: isEn
        ? 'An Rsbuild-based static site generator for creating documentation sites'
        : '基于 Rsbuild 的静态站点生成器，用于创建优雅的文档站点',
      logo: 'https://assets.rspack.dev/rspress/rspress-logo-480x480.png',
      url: 'https://rspress.dev',
      urlText: 'rspress.dev',
    },
    {
      name: 'Rsdoctor',
      desc: isEn
        ? 'A one-stop build analyzer that makes the build process transparent'
        : '一站式的构建分析工具，使构建流程变得透明、可预测和可优化',
      logo: 'https://assets.rspack.dev/rsdoctor/rsdoctor-logo-480x480.png',
      url: 'https://rsdoctor.dev',
      urlText: 'rsdoctor.dev',
    },
    {
      name: 'Rstest',
      desc: isEn
        ? 'An testing framework that provides first-class support for Rspack ecosystem'
        : '基于 Rspack 的测试框架，为 Rspack 生态提供全面、一流的支持',
      logo: 'https://assets.rspack.dev/rstest/rstest-logo.svg',
      url: 'https://rstest.dev/',
      urlText: 'rstest.dev',
    },
  ];

  return (
    <div className={innerContainerStyle}>
      <div className={titleAndDescStyle}>
        <h1 className={titleStyle}>Rstack</h1>
        <p className={descStyle}>
          {isEn
            ? 'A unified JavaScript toolchain built around Rspack, with high performance and consistent architecture'
            : '围绕 Rspack 打造的 JavaScript 统一工具链，具有优秀的性能和一致的架构'}
        </p>
      </div>
      <div className={styles.tools}>
        {tools.map(({ name, desc, logo, url, urlText }) => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              className={[styles.tool, styles.rainbow].join(' ')}
              key={name}
              href={url}
            >
              <img
                src={logo}
                alt={name}
                className={styles.logo}
                loading="lazy"
              />
              <div className={styles.toolTitle}>{name}</div>
              <p className={styles.toolDescription}>{desc}</p>
              <div className={styles.toolUrl}>{urlText}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
});
