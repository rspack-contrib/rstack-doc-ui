import type { CSSProperties, ReactNode } from 'react';

type LinkProps = {
  className: string;
  href: string;
  children: ReactNode;
  style?: CSSProperties;
};

export type LinkComp = (props: LinkProps) => JSX.Element;

/**
 * A backup link component, import { Link } from 'rspress/theme' to replace it
 */
export const ALink: LinkComp = ({ className, href, children, style }) => {
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
};
