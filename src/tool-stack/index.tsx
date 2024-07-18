import styles from './index.module.scss';

export function ToolStack(props: { lang: 'en' | 'zh' }) {
  const isEn = props.lang === 'en';
  const tools = [
    {
      name: 'Rspack',
      desc: isEn
        ? 'A high performance JavaScript bundler written in Rust, with a webpack-compatible API.'
        : '基于 Rust 编写的高性能 JavaScript 打包工具，具备与 webpack 兼容的 API。',
      logo: 'https://assets.rspack.dev/rspack/rspack-logo.svg',
      url: 'https://rspack.dev',
    },
    {
      name: 'Rspress',
      desc: isEn
        ? 'A static site generator based on Rsbuild and MDX for creating elegant documentation sites.'
        : '基于 Rsbuild 和 MDX 的静态站点生成器，用于创建优雅的文档站点。',
      logo: 'https://assets.rspack.dev/rspress/rspress-logo-480x480.png',
      url: 'https://rspress.dev',
    },
    {
      name: 'Rsbuild',
      desc: isEn
        ? 'An Rspack-based build tool that provides out-of-the-box setup for enjoyable development experience.'
        : '基于 Rspack 的构建工具，包含开箱即用的预设配置，带来愉悦的开发体验。',
      logo: 'https://assets.rspack.dev/rsbuild/rsbuild-logo.svg',
      url: 'https://rsbuild.dev',
    },
    {
      name: 'Rsdoctor',
      desc: isEn
        ? 'A powerful one-stop build analyzer for visualizing the build process and build artifacts.'
        : '强大的一站式构建分析工具，用于可视化构建过程和构建产物。',
      logo: 'https://assets.rspack.dev/rsdoctor/rsdoctor-logo-480x480.png',
      url: 'https://rsdoctor.dev',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.root}>
        {tools.map(tool => (
          <a
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className={styles.wrapperLink}
            key={tool.name}
          >
            <div className={styles.card}>
              <div className={styles.avatar}>
                <img className={styles.logo} src={tool.logo} alt="logo" />
              </div>
              <div className={styles.mask} />
              <div className={styles.body}>
                <div className={styles.name}>{tool.name}</div>
                <div className={styles.desc}>{tool.desc}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
