import { Col } from 'antd';
import type { AdmissInfo } from '../hooks';
import { Text, Title } from '@/components';

interface IAdmissInfoProps {
  admisInfoDt: AdmissInfo | undefined;
}

const AdmissInfo: React.FC<IAdmissInfoProps> = (props) => {
  const { admisInfoDt } = props;
  return (
    <section className='bg-white p-10 rounded-2xl'>
      {admisInfoDt && (
        <div className='space-y-5'>
          <Col className='!space-y-4'>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              I. Admission Requirements
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {admisInfoDt.require}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              II. Admission Method
            </Title>
            <Text
              style={{
                whiteSpace: 'pre-line',
              }}
              className='!text-md !font-semibold !mt-2 !block'
            >
              {admisInfoDt.method}
            </Text>
          </Col>
        </div>
      )}
    </section>
  );
};

export default AdmissInfo;
