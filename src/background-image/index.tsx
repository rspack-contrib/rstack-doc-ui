import { type FC, useEffect, useState } from 'react';
import styles from './index.module.scss';

const useTopArrived = () => {
  const [scrollY, setScrollY] = useState(0);
  const topArrived = scrollY < 100;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      capture: false,
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    topArrived,
  };
};

export type BackgroundProps = {
  navBarTopArrived?: boolean;
};

export const BackgroundImage: FC<BackgroundProps> = ({
  navBarTopArrived = true,
}) => {
  const { topArrived } = useTopArrived();

  useEffect(() => {
    if (!navBarTopArrived) {
      return;
    }
    if (topArrived) {
      document.body.classList.remove('notTopArrived');
    } else {
      document.body.classList.add('notTopArrived');
    }
  }, [topArrived, navBarTopArrived]);

  return (
    <>
      <style>
        {`:root {
              --rp-c-bg: #0b0c0e;
          }
          :root:not(.dark) {
              --rp-c-bg: #fff;
          }
          .rspress-nav {
            transition: background 0.4s;
          }
          body:not(.notTopArrived) .rspress-nav {
            background: transparent !important;
          }
          `}
      </style>
      <img
        className={styles.background}
        src="https://assets.rspack.dev/rspack/assets/landingpage-background-compressed.png"
        alt="background"
      />
    </>
  );
};
