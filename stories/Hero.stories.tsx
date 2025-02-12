import { BackgroundImage } from '@rstack-dev/doc-ui/background-image';
import { Hero } from '@rstack-dev/doc-ui/hero';
import './index.scss';

export const HeroStory = () => {
  const handleClickLearnMore = () => {
    console.log('learn more');
  };
  const handleClickGetStarted = () => {
    console.log('get started');
  };

  return (
    <>
      <div style={{ position: 'relative' }}>
        <BackgroundImage />
        <Hero
          showStars
          onClickLearnMore={handleClickLearnMore}
          onClickGetStarted={handleClickGetStarted}
        />
        <Hero
          showStars
          githubURL="https://github.com/rspack-contrib/rstack-doc-ui"
          onClickLearnMore={handleClickLearnMore}
          onClickGetStarted={handleClickGetStarted}
        />
      </div>
    </>
  );
};

export default {
  title: 'Hero',
};
