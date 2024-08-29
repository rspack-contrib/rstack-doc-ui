import { Hero } from '../dist/hero';
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
      <div style={{ margin: 20 }}>
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
