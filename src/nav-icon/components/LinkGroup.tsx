import type { Lang } from '../utils';
import { Link, type LinkInfo } from './Link';
import style from './LinkGroup.module.scss';

export const LinkGroup = (props: {
  title: string;
  titleEn: string;
  lang: Lang;
  links: LinkInfo[];
}) => {
  const Links = props.links.map(link => (
    <Link key={link.name} {...link} lang={props.lang} />
  ));
  return (
    <div className={style.root}>
      <div className={style.links}>{Links}</div>
    </div>
  );
};
