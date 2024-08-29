import type { FC, ReactNode } from 'react';
import styles from './index.module.scss';

export type Feature = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

type LinkProps = {
  className: string;
  href: string;
  children: ReactNode;
};

const NormalLink: FC<LinkProps> = ({ className, href, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export type FullyFeaturedProps = {
  LinkComp?: (props: any) => JSX.Element;
  /**
   * 8 or 12 or 16
   */
  featureRows: Feature[][];
};

export const FullyFeatured: FC<FullyFeaturedProps> = ({
  LinkComp,
  featureRows,
}) => {
  const Link = LinkComp ?? NormalLink;

  return (
    <div className={styles.main}>
      {featureRows.map((row, index) => {
        return (
          <div className={styles.features} key={index}>
            {row.map(({ icon, description, link, title }, index) => (
              <Link key={index} className={styles.featureCard} href={link}>
                <img
                  src={icon}
                  alt={index.toString()}
                  className={styles.icon}
                  loading="lazy"
                />
                <div className={styles.featureContent}>
                  <h2 className={styles.featureTitle}>{title}</h2>
                  <p className={styles.featureDescription}>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};
