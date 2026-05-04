import { Carousel } from 'antd';
import React, { useMemo, useState, useCallback } from 'react';
import styles from '../iesCl.module.scss';
import type { SlideCusLayoutProps } from '../types';

const SlideCus: React.FC<SlideCusLayoutProps> = React.memo((props) => {
  const { images, className, mb } = props;
  const [current, setCurrent] = useState(0);

  const objectFit = mb ? 'contain' : 'fill';

  const handleChange = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const renderImages = useMemo(() => {
    return images.map((img, i) => {
      const isActive = i === current;
      const isNext =
        i === current + 1 || (current === images.length - 1 && i === 0);

      if (!isActive && !isNext) return null;

      return (
        <div key={i}>
          <img
            src={img}
            loading='lazy'
            decoding='async'
            fetchPriority={isActive ? 'high' : 'low'}
            className='!w-full !h-[87.7vh]'
            style={{
              objectFit,
              transform: isActive ? 'translateZ(0)' : 'none',
              willChange: isActive ? 'transform' : 'auto',
            }}
          />
        </div>
      );
    });
  }, [images, current, objectFit]);

  return (
    <div className={className}>
      <Carousel
        autoplay={!mb}
        pauseOnHover={!mb}
        effect={!mb ? 'fade' : 'scrollx'}
        dots={!mb}
        arrows={false}
        className={styles.dotCustom}
        beforeChange={(_, next) => handleChange(next)}
      >
        {renderImages}
      </Carousel>
    </div>
  );
});

export default SlideCus;
