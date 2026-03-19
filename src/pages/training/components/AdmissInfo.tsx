import { Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import type { AdmissInfo } from '../hooks';
import { Text, Title } from '@/components';

interface IAdmissInfoProps {
  admisInfoDt: AdmissInfo | undefined;
}

const AdmissInfo: React.FC<IAdmissInfoProps> = (props) => {
  const { admisInfoDt } = props;
  const isMb = useMediaQuery({ maxWidth: 1024 });

  return (
    <section
      className={`bg-white rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
    >
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
