import { motion } from 'framer-motion';
import type { BoaMember } from '../hooks';
import { Text } from '@/components';

export interface BoaMemberCardProps {
  member: BoaMember;
  dark: boolean;
}

const BoaMemberCard: React.FC<BoaMemberCardProps> = (props) => {
  const { member, dark } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className='group cursor-default'
    >
      <div className='overflow-hidden rounded-lg aspect-3/4 mb-3'>
        <img
          src={member.image}
          alt={member.name}
          loading='lazy'
          className='w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105'
        />
      </div>
      <Text
        color={dark ? 'white' : '#111827'}
        className='font-semibold! text-lg! leading-snug! block!'
      >
        {member.name}
      </Text>
      <Text
        color={dark ? '#9ca3af' : '#6b7280'}
        className='leading-snug! block! mt-0.5'
      >
        {member.role}
      </Text>
    </motion.div>
  );
};

export default BoaMemberCard;
