import { Carousel } from 'antd';
import React, { memo, useMemo } from 'react';
import styles from '../iesCl.module.scss';
import type { SlideCusLayoutProps } from '../types';

const SlideCus: React.FC<SlideCusLayoutProps> = (props) => {
  const { images, className, mb } = props;

  const objectFit = mb ? 'contain' : 'cover';

  const renderImages = useMemo(() => {
    return images.map((img, i) => (
      <div key={i}>
        <img
          src={img}
          fetchPriority='high'
          className='!w-full !h-full'
          style={{ objectFit }}
          decoding='async'
        />
      </div>
    ));
  }, [images, objectFit]);

  return (
    <div className={className}>
      <Carousel
        autoplay={!mb}
        pauseOnHover={!mb}
        effect={!mb ? 'fade' : 'scrollx'}
        dots={!mb}
        arrows={false}
        className={styles.dotCustom}
      >
        {renderImages}
      </Carousel>
    </div>
  );
};

export default memo(SlideCus);
