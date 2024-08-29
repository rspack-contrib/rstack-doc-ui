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
      <div>
        <Hero
          showStars
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
