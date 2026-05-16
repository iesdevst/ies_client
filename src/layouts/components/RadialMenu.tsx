import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { socialCn } from '../hooks';
import { Text } from '@/components';

const RadialMenu = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const radius = 95;

  // click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // hide on scroll
  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll + 10) setVisible(false);
      else setVisible(true);

      lastScroll = current;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`${open ? 'bottom-32 right-36' : 'bottom-12 right-12'} fixed z-50`}
        >
          {/* 🔥 CENTER WRAPPER (QUAN TRỌNG NHẤT) */}
          <div className='relative w-0 h-0'>
            {/* BACKDROP */}
            {open && (
              <motion.div
                onClick={() => setOpen(false)}
                className='fixed inset-0 bg-black/10 backdrop-blur-sm'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}

            {/* ITEMS */}
            <AnimatePresence>
              {open &&
                socialCn.map((item, index) => {
                  const angle = (index / socialCn.length) * Math.PI * 2;

                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.a
                      key={item.key}
                      href={item.href}
                      target={
                        item.href.startsWith('http') ? '_blank' : undefined
                      }
                      rel={
                        item.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1, x, y }}
                      exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 18,
                      }}
                      className='absolute left-0 top-0 flex flex-col-reverse items-center gap-2'
                      style={{
                        x,
                        y,
                        translateX: '-60%',
                        translateY: '-70%',
                      }}
                    >
                      {/* icon */}
                      <div className='w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition'>
                        <img src={item.icon} className='w-8 h-8' />
                      </div>
                      {/* label */}
                      <Text
                        color='white'
                        className='text-xs bg-black px-2 py-1 !rounded-2xl whitespace-nowrap'
                      >
                        {item.label}
                      </Text>
                    </motion.a>
                  );
                })}
            </AnimatePresence>

            {/* MAIN BUTTON (CENTER) */}
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.85 }}
              className='
                absolute left-0 top-0
                -translate-x-1/2 -translate-y-1/2
                w-14 h-14
                bg-gradient-to-br from-blue-600 to-indigo-600
                text-white rounded-full shadow-xl
                flex items-center justify-center text-xl
              '
            >
              {open ? '✕' : '＋'}
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RadialMenu;
