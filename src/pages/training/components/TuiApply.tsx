import { Col } from 'antd';
import { useMediaQuery } from 'react-responsive';
import type { TuiApply } from '../hooks';
import { Text, Title } from '@/components';

interface ITuiApplyProps {
  tuiApplyDt: TuiApply | undefined;
}

const TuiApply: React.FC<ITuiApplyProps> = (props) => {
  const { tuiApplyDt } = props;
  const isMb = useMediaQuery({ maxWidth: 1024 });

  return (
    <section
      className={`bg-white rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
    >
      {tuiApplyDt && (
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
              {tuiApplyDt.requirement}
            </Text>
          </Col>
          <Col>
            <Title className='!m-0 !text-[#BE3691]' level={3}>
              II. Application Documents
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
              III. Location and Working Hours
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
