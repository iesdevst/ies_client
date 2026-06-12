import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';
import type { BoaBoardSection } from '../hooks';
import { Text } from '@/components';

export interface BoaSpotlightProps {
  section: BoaBoardSection;
  dark: boolean;
  accentLine: string;
}

const BoaSpotlight: React.FC<BoaSpotlightProps> = (props) => {
  const { accentLine, dark, section } = props;
  const all = [section.featured, ...section.members];
  const [activeId, setActiveId] = useState(section.featured.id);
  const selected = all.find((m) => m.id === activeId) ?? section.featured;

  const handleSelect = useCallback((id: string) => setActiveId(id), []);

  return (
    <div
      className={`rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 ${
        dark ? 'bg-gray-500' : 'bg-[#e1e5eb]'
      }`}
    >
      {/* Left — animated photo */}
      <div className='relative overflow-hidden aspect-video'>
        <AnimatePresence mode='wait'>
          <motion.img
            key={selected.id}
            src={selected.image}
            alt={selected.name}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className='absolute inset-0 w-full h-full object-cover object-top'
          />
        </AnimatePresence>

        {/* gradient overlay */}
        <div className='absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/60 to-transparent' />

        <AnimatePresence mode='wait'>
          <motion.div
            key={selected.id + '-label'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute bottom-0 left-0 p-6'
          >
            <Text
              color='rgba(255,255,255,0.7)'
              className='block! text-lg! uppercase! tracking-widest! mb-1!'
            >
              {selected.role}
            </Text>
            <Text
              color='white'
              className='block! font-bold! text-xl! leading-tight!'
            >
              {selected.name}
            </Text>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right — clickable name list */}
      <div className='flex flex-col justify-start p-8 gap-1'>
        {all.map((m) => {
          const active = m.id === activeId;
          return (
            <motion.button
              key={m.id}
              onClick={() => handleSelect(m.id)}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`
                text-left py-3 px-4 rounded-lg border-l-7  transition-colors duration-200
                cursor-pointer bg-transparent w-full
                ${active ? (dark ? 'bg-gray-700! border-blue-500!' : 'bg-white shadow-sm border-[#F4A340]!') : 'border-transparent!'}
              `}
              style={{ borderLeftColor: active ? accentLine : 'transparent' }}
            >
              <Text
                color={active ? (dark ? 'white' : '#1B3A6B') : '#9ca3af'}
                className='font-semibold! text-lg! leading-snug! transition-colors block!'
              >
                {m.name}
              </Text>
              <Text
                color={
                  active
                    ? dark
                      ? '#d1d5db'
                      : '#4A6FA5'
                    : dark
                      ? '#4b5563'
                      : '#9ca3af'
                }
                className='block! mt-0.5 !text-lg'
              >
                {m.role}
              </Text>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default BoaSpotlight;
