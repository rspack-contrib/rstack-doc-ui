import { useState } from 'react';
import IconCloseCircle from './close';
import styles from './index.module.scss';

export function Announcement({
  href,
  message,
  localStorageKey,
  display = true,
  barClassName,
}: {
  href: string;
  message: string | React.ReactNode;
  localStorageKey: string;
  display?: boolean;
  barClassName?: string;
}) {
  if (!display) {
    return null;
  }
  const [disable, setDisable] = useState(
    window.localStorage.getItem(localStorageKey) ?? false,
  );

  if (disable) {
    return null;
  }

  return (
    <div className={`${styles.bar} ${barClassName}`}>
      <a href={href} className={styles.link}>
        {message}
      </a>
      <IconCloseCircle
        onClick={() => {
          setDisable(true);
          window.localStorage.setItem(localStorageKey, 'true');
        }}
        className={styles.close}
      />
    </div>
  );
}
