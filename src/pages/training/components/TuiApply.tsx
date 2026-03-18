import { Col } from 'antd';
import type { TuiApply } from '../hooks';
import { Text, Title } from '@/components';

interface ITuiApplyProps {
  tuiApplyDt: TuiApply | undefined;
}

const TuiApply: React.FC<ITuiApplyProps> = (props) => {
  const { tuiApplyDt } = props;
  return (
    <section className='bg-white p-10 rounded-2xl'>
      {tuiApplyDt && (
        <div className='space-y-5'>
          <Col className='!space-y-4'>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              I. Introduction
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {tuiApplyDt.requirement}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              II. Training Objectives
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {tuiApplyDt.document}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              III. Training Content
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {tuiApplyDt.work}
            </Text>
          </Col>
        </div>
      )}
    </section>
  );
};

export default TuiApply;
