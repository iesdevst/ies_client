import ThunderboltOutlined from '@ant-design/icons/ThunderboltOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import type { SlideCusLayoutProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const SlideCus: React.FC<SlideCusLayoutProps> = (props) => {
  const { images, className, mb, tl, tlpr, dark, title, textsl, nowtext } =
    props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className={className}>
      {/* Header */}
      <div className='text-center mb-10'>
        <div className='flex justify-center items-center gap-x-1'>
          <ThunderboltOutlined
            className={`${dark ? '!text-[#99a1af]' : '!text-[#562feb]'}`}
          />

          <Text
            color={dark ? '#99a1af' : '#562feb'}
            className='uppercase !text-sm tracking-widest !font-bold'
          >
            {title}
          </Text>
        </div>

        <Title
          className={`${mb ? '!px-10' : '!text-5xl font-semibold'} !m-0 !mt-5`}
        >
          {textsl} <span className='!text-violet-500'>{nowtext}</span>
        </Title>
      </div>

      <div
        className={`${mb ? 'px-4' : tl ? 'px-5' : tlpr ? 'px-10' : ''} flex justify-center`}
      >
        <div
          className={`relative rounded-2xl overflow-hidden shadow-2xl ${
            mb
              ? 'w-full aspect-[4/3]'
              : tl || tlpr
                ? 'w-full aspect-[21/9]'
                : 'w-2/3 aspect-[2.8/1]'
          }`}
        >
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{
                x: direction > 0 ? '100%' : '-100%',
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={{
                x: direction > 0 ? '-100%' : '100%',
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className='absolute inset-0'
            >
              <img
                src={images[currentIndex]}
                className='w-full h-full object-fill'
                alt={`testimonial ${currentIndex + 1}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          {images.length > 1 && (
            <div className='absolute bottom-3 left-4 flex gap-x-3 z-10'>
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-gray-700 scale-125'
                      : 'bg-white/70 hover:bg-white/70 hover:cursor-pointer'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideCus;
