import type { ReactNode } from 'react';

import styles from './index.module.scss';

export type Company = {
  name: string;
  logo: string;
  url: string;
  text?: string;
  width?: string | number;
};

type LinkProps = {
  className: string;
  href: string;
  children: ReactNode;
};

type LinkComp = (props: LinkProps) => JSX.Element;

const NormalLink: LinkComp = ({ className, href, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

const CompanyItem = ({ item, Link }: { item: Company; Link: LinkComp }) => {
  const { logo, name, url, text, width } = item;
  return (
    <Link className={styles.logo} href={url}>
      <img src={logo} alt={name} style={{ width }} loading="lazy" />
      {text !== undefined ? (
        <span className={styles.logoText}>{text}</span>
      ) : (
        <></>
      )}
    </Link>
  );
};

export type BuiltWithRspackProps = {
  title: string;
  LinkComp?: LinkComp;
  companyList: Company[];
};

export const BuiltWithRspack: React.FC<BuiltWithRspackProps> = ({
  title,
  LinkComp,
  companyList,
}) => {
  const Link = LinkComp ?? NormalLink;
  return (
    <div className={styles.innerContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.logos}>
        {companyList.map(i => {
          return <CompanyItem key={i.name} item={i} Link={Link} />;
        })}
      </div>
    </div>
  );
};
