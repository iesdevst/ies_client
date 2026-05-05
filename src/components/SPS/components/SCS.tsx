import { memo } from 'react';
import styles from '../iesCl.module.scss';
import type { SCSLayoutProps } from '../types';
import { Title } from '@/components/AntTypography';

const SCS: React.FC<SCSLayoutProps> = (props) => {
  const { title, children, splitFeat, reverse, mb } = props;

  return (
    <div className='w-full'>
      {title && (
        <div className='mb-10 text-center'>
          <Title className='!text-white'>{title}</Title>
        </div>
      )}

      <div
        className={`${mb ? 'flex flex-col' : 'flex'} ${
          reverse ? styles.splitCustomContainer : styles.splitFalseCusContainer
        }`}
      >
        {!reverse ? (
          <>
            {children}
            {splitFeat}
          </>
        ) : (
          <>
            {splitFeat}
            {children}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(SCS);
