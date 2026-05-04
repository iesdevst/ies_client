import { Flex, Col } from 'antd';
import { memo } from 'react';
import styles from '../iesCl.module.scss';
import type { SCSLayoutProps } from '../types';
import { Title } from '@/components/AntTypography';

const SCS: React.FC<SCSLayoutProps> = (props) => {
  const { title, children, splitFeat, reverse, mb } = props;
  return (
    <Col className='w-full'>
      {title && (
        <Col className='mb-10 text-center'>
          <Title className='!text-white'>{title}</Title>
        </Col>
      )}

      <Flex
        vertical={mb}
        className={
          reverse ? styles.splitCustomContainer : styles.splitFalseCusContainer
        }
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
