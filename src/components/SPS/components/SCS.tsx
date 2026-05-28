import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import { memo } from 'react';
import styles from '../iesCl.module.scss';
import type { SCSLayoutProps } from '../types';
import { Title } from '@/components/AntTypography';

const SCS: React.FC<SCSLayoutProps> = (props) => {
  const { title, children, splitFeat, reverse, mb } = props;

  return (
    <Col className='w-full'>
      {title && (
        <Flex
          justify='flex-start'
          align='center'
          className={`${mb ? '!mb-5' : '!mb-10'}`}
        >
          <Title className='!text-white !m-0'>{title}</Title>
        </Flex>
      )}
      <Flex
        vertical={mb}
        className={`${reverse ? styles.splitCustomContainer : styles.splitFalseCusContainer}`}
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
      </Flex>
    </Col>
  );
};

export default memo(SCS);
