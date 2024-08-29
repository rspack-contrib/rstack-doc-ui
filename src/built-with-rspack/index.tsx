import { ALink, type LinkComp } from '../shared';

import styles from './index.module.scss';

export type Company = {
  name: string;
  logo: string;
  url: string;
  text?: string;
  width?: string | number;
};

const CompanyItem = ({
  item,
  LinkComp,
}: {
  item: Company;
  LinkComp: LinkComp;
}) => {
  const { logo, name, url, text, width } = item;
  const Link = LinkComp;
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
  const Link = LinkComp ?? ALink;
  return (
    <div className={styles.innerContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.logos}>
        {companyList.map(i => {
          return <CompanyItem key={i.name} item={i} LinkComp={Link} />;
        })}
      </div>
    </div>
  );
};
