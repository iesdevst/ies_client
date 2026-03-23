import { Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import type { OvwDetail, OvwScDetail } from '../hooks';
import { Text, Title } from '@/components';

interface IProgOvwProps {
  ovwDt?: OvwDetail | undefined;
  ovwScDt?: OvwScDetail | undefined;
}

const ProgOvw: React.FC<IProgOvwProps> = (props) => {
  const isMb = useMediaQuery({ maxWidth: 1024 });

  const { ovwDt, ovwScDt } = props;

  return (
    <section
      className={`bg-white rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
    >
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

      {ovwScDt && (
        <div className='space-y-5'>
          <Col className='!space-y-4'>
            <Title className='!m-0 !text-[#6472cf]' level={3}>
              I. Introduction
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {ovwScDt.intro}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#6472cf]' level={3}>
              II. Training Objectives
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {ovwScDt.objective}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#6472cf]' level={3}>
              III. Training Content
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {ovwScDt.decs}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#6472cf]' level={3}>
              IV. Career Opportunities
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {ovwScDt.career}
            </Text>
          </Col>
        </div>
      )}
    </section>
  );
};

export default ProgOvw;
