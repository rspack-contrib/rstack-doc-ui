import type { FC } from 'react';
import { ALink, type LinkComp } from '../shared';
import styles from './index.module.scss';

export type Feature = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

export type FullyFeaturedProps = {
  LinkComp?: LinkComp;
  /**
   * 8 or 12 or 16
   */
  featureRows: Feature[][];
};

export const FullyFeatured: FC<FullyFeaturedProps> = ({
  LinkComp,
  featureRows,
}) => {
  const Link = LinkComp ?? ALink;

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
