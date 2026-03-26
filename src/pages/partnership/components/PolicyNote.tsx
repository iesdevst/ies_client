import { Col, Flex, Image } from 'antd';
import PNC from '@/assets/imgs/policy_note_sec.png';
import { IesClSection, Text, Title } from '@/components';

const PolicyNote: React.FC = () => {
  return (
    <IesClSection
      id='policyNote'
      layout='simple'
      divider={false}
      children={
        <section className='py-40'>
          <div
            className='
  bg-gradient-to-br 
  from-sky-300 via-blue-400 to-indigo-400
  p-30 
  rounded-t-[200px] rounded-b-[200px]
'
          >
            <div>
              <Title className='!m-0' level={5}>
                No Study Mode on Degrees
              </Title>
            </div>
            <Flex
              vertical
              justify='flex-start'
              align='flex-start'
              className='!pt-10'
            >
              <Title className='!m-0 !ml-18'>
                On December 30, 2019, the Ministry of Education
              </Title>
              <Title className='!m-0 !w-3/4'>
                and Training issued Circular No. 27/2019/TT-BGDĐT, regulating
                the main content displayed on higher education diplomas and
                diploma supplements.
              </Title>
            </Flex>
            <div className='py-20'>
              <div className='h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent shadow-[0_8px_20px_rgba(59,130,246,0.4)]'></div>
            </div>
            <div className='grid grid-cols-3 gap-x-10'>
              <Col>
                <Title level={4} className='!font-bold'>
                  Applicable to All Higher Education Degrees
                </Title>
                <Text className='!block !text-lg'>
                  Under this Circular, graduates will be awarded both a diploma
                  and a diploma supplement. This applies to bachelor’s,
                  master’s, doctoral, and equivalent degrees.
                </Text>
              </Col>
              <Image src={PNC} preview={false} className='!rounded-xl' />
              <Col>
                <Title level={4} className=' !font-bold'>
                  Removal of Study Mode Information
                </Title>
                <Text className='!block !text-lg'>
                  One notable change is that diplomas will no longer include
                  information about the mode of study, such as full-time,
                  part-time, distance learning, or guided self-study, as
                  previously required under Circular No. 19/2011/TT-BGDĐT.
                </Text>
              </Col>
            </div>
          </div>
        </section>
      }
    />
  );
};

export default PolicyNote;
