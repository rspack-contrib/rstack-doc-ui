import { type FC, memo } from 'react';
import { ALink, type LinkComp } from '../shared';
import styles from './index.module.scss';
import { useCardAnimation } from './useCardAnimation';
import { useLottieAnimation } from './useLottieAnimation';

export type Feature = {
  img: string;
  url: string;
  title: string;
  description: string;
  lottieJsonData?: any;
};

type WhyRspackCardProps = {
  title: string;
  description: string;
};

const WhyRspackCard: FC<WhyRspackCardProps> = memo(({ title, description }) => {
  const {
    container,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    outerContainer,
    ref,
    shine,
    shineBg,
  } = useCardAnimation();

  return (
    <div
      style={{
        position: 'relative',
        transform: outerContainer,
        transformStyle: 'preserve-3d',
        zIndex: 6,
        WebkitTapHighlightColor: 'rgba(#000, 0)',
      }}
      className={styles.whyRspackCard}
      ref={ref as any}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <div
        className={styles.whyRspack}
        style={{
          transform: container,
          position: 'relative',
          transition: 'all 0.2s ease-out',
        }}
      >
        <div
          className="shine"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: '20px',
            zIndex: '8',
            ...(shine
              ? {
                  transform: shine,
                }
              : {}),
            ...(shineBg
              ? {
                  background: shineBg,
                }
              : {}),
          }}
        />
        <div className={styles.whyRspackContent}>
          <h3 className={styles.whyRspackTitle}>{title}</h3>
          <p className={styles.whyRspackDescription}>{description}</p>
          <img
            className={styles.whyRspackBg}
            src="https://assets.rspack.dev/rspack/assets/landingpage-why-rspack-card-why-bg.png"
            alt="bg"
          />
        </div>
      </div>
    </div>
  );
});

const FeatureItem = memo(
  ({ feature, LinkComp }: { feature: Feature; LinkComp: LinkComp }) => {
    const { description, img, title, url, lottieJsonData } = feature;
    const {
      container,
      isHovering,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      outerContainer,
      ref: cardAnimationContainerRef,
      shine,
      shineBg,
    } = useCardAnimation();

    const hasLottieAnimation = lottieJsonData !== undefined;

    const { ref: lottieContainerRef } = useLottieAnimation(
      isHovering,
      lottieJsonData,
    );

    const Link = LinkComp;

    return (
      <div
        style={{
          position: 'relative',
          transform: outerContainer,
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          WebkitTapHighlightColor: 'rgba(#000, 0)',
        }}
        className={styles.featureCard}
        ref={cardAnimationContainerRef as any}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchStart={onTouchStart}
      >
        <Link
          href={url}
          key={title}
          className={styles.featureCardInner}
          style={{
            transform: container,
            position: 'relative',
            transition: 'all 0.2s ease-out',
          }}
        >
          <div
            className="shine"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              borderRadius: '20px',
              zIndex: '8',
              ...(shine
                ? {
                    transform: shine,
                  }
                : {}),
              ...(shineBg
                ? {
                    background: shineBg,
                  }
                : {}),
            }}
          />
          <div className={styles.featureIcon}>
            {
              <img
                src={img}
                alt={title}
                className={styles.featureIconImg}
                style={
                  hasLottieAnimation
                    ? {
                        display:
                          isHovering && hasLottieAnimation ? 'none' : 'flex',
                      }
                    : {}
                }
              />
            }
            {hasLottieAnimation ? (
              <div
                ref={lottieContainerRef as any}
                className={styles.featureIconImg}
                style={{
                  display: isHovering ? 'flex' : 'none',
                }}
              />
            ) : null}
          </div>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </Link>
      </div>
    );
  },
);

export type FeatureListProps = {
  features: Feature[];
  LinkComp?: LinkComp;
};

const FeatureList: FC<FeatureListProps> = memo(({ LinkComp, features }) => {
  return (
    <>
      {features.map(feature => {
        return (
          <FeatureItem
            key={feature.title}
            feature={feature}
            LinkComp={LinkComp ?? ALink}
          />
        );
      })}
    </>
  );
});

export type WhyRspackProps = FeatureListProps & Partial<WhyRspackCardProps>;

export const WhyRspack: FC<WhyRspackProps> = ({
  title,
  description,
  features,
  LinkComp,
}) => {
  return (
    <div className={styles.features}>
      {title && description ? (
        <WhyRspackCard title={title} description={description} />
      ) : null}
      <FeatureList features={features} LinkComp={LinkComp} />
    </div>
  );
};
