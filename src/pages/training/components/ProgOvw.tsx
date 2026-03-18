import { Col } from 'antd';
import type { OvwDetail } from '../hooks';
import { Text, Title } from '@/components';

interface IProgOvwProps {
  ovwDt: OvwDetail | undefined;
}

const ProgOvw: React.FC<IProgOvwProps> = (props) => {
  const { ovwDt } = props;

  return (
    <section className='bg-white p-10 rounded-2xl'>
      {ovwDt && (
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
              {ovwDt.intro}
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
              {ovwDt.objective}
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
              {ovwDt.decs}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              IV. Career Opportunities
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {ovwDt.career}
            </Text>
          </Col>
        </div>
      )}
    </section>
  );
};

export default ProgOvw;
