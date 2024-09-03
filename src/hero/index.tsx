import type { FC } from 'react';
import { useRef, useState } from 'react';
import BackgroundStar from './BackgroundStar';
import styles from './index.module.scss';

const positions = [
  [91.4, 22.9],
  [36, 67.6],
  [94.1, 47.7],
  [33.8, 32.5],
  [43.1, 77.6],
  [9.8, 73.4],
  [16.1, 17.1],
  [1, 10],
  [88.3, 44.9],
  [19.3, 79],
  [28.5, 11.8],
  [94.6, 44.9],
  [53.8, 3.4],
  [41.7, 20],
  [56.9, 80.6],
  [16.4, 83.4],
  [39.4, 66.8],
  [19, 18.4],
  [25.1, 28.1],
  [18.9, 35.6],
  [32.9, 12.3],
  [21.2, 72.8],
  [83.3, 79.8],
  [71.4, 36.8],
  [62.2, 50.4],
  [45.4, 13.7],
  [61.1, 28.5],
  [18.2, 64.1],
  [40.7, 34.7],
  [87.6, 20.7],
  [78.3, 30.8],
  [84.4, 58.2],
  [74.2, 74.5],
  [12.4, 66.4],
  [68.2, 41.6],
];

const useMouseMove = () => {
  const ref = useRef<any>();
  const [pageX, setPageX] = useState<null | number>(null);
  const [pageY, setPageY] = useState<null | number>(null);

  const handleMove = ({ pageX, pageY }: { pageX: number; pageY: number }) => {
    setPageX(pageX);
    setPageY(pageY);
  };

  return {
    ref,
    pageX,
    pageY,
    onMouseMove: handleMove,
  };
};

type HeroProps = {
  onClickGetStarted: () => void;
  onClickLearnMore: () => void;

  showStars?: boolean;
  showOvalBg?: boolean;
  logoUrl?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  getStartedButtonText?: string;
  learnMoreButtonText?: string;
};

export const Hero: FC<HeroProps> = ({
  onClickGetStarted,
  onClickLearnMore,
  showStars = false,
  showOvalBg = true,
  logoUrl = 'https://assets.rspack.dev/rspack/rspack-logo.svg',
  title = 'Rspack',
  subTitle = 'The fast Rust-based web bundler',
  description = 'Seamlessly replace webpack with compatible API',
  getStartedButtonText = 'Get Started',
  learnMoreButtonText = 'Learn More',
}) => {
  const { pageX, pageY, ref, onMouseMove } = useMouseMove();

  return (
    <section className={styles.hero} ref={ref} onMouseMove={onMouseMove}>
      <div className={styles.innerHero}>
        {showStars
          ? positions.map(([top, left], i) => {
              return (
                <BackgroundStar
                  key={i}
                  top={`${top}%`}
                  left={`${left}%`}
                  size={i / 20 + 3}
                  pageX={pageX}
                  pageY={pageY}
                />
              );
            })
          : null}
        <div className={styles.logo}>
          <img
            src={logoUrl}
            className={`${styles.logoImg} rs-logo`}
            alt="logo"
          />
          {showOvalBg ? <div className={`${styles.ovalBg} rs-oval`} /> : null}
        </div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
        <p className={styles.subtitle}>{subTitle}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${styles.buttonPrimary}`}
            type="button"
            onClick={onClickGetStarted}
          >
            {getStartedButtonText}
          </button>
          <button
            className={`${styles.button} ${styles.buttonSecondary}`}
            type="button"
            onClick={onClickLearnMore}
          >
            {learnMoreButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};
