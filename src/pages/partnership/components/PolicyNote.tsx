import { Col, Image } from 'antd';
import { useMediaQuery } from 'react-responsive';
import PNC from '@/assets/imgs/policy_note_sec.png';
import { IesClSection, Text, Title } from '@/components';

const PolicyNote: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  return (
    <IesClSection
      id='policyNote'
      layout='simple'
      divider={false}
      children={
        <section className={`${!mb ? 'py-40' : 'py-10'}`}>
          <div
            className={`'
  bg-gradient-to-br 
  from-sky-300 via-blue-400 to-indigo-400 
  rounded-t-[200px] rounded-b-[200px] ${!mb ? 'p-30' : 'pb-30 pt-20 px-6'}`}
          >
            <div>
              <Title className={`${!mb ? '!m-0' : '!text-center'}`} level={5}>
                No Study Mode on Degrees
              </Title>
            </div>

            {!mb ? (
              <>
                <Title level={!mb ? 1 : 5} className='!m-0 !ml-18'>
                  On December 30, 2019, the Ministry of Education
                </Title>
                <Title className='!m-0 !w-3/4'>
                  and Training issued Circular No. 27/2019/TT-BGDĐT, regulating
                  the main content displayed on higher education diplomas and
                  diploma supplements.
                </Title>
              </>
            ) : (
              <Text className='!block !font-bold mt-5'>
                On December 30, 2019, the Ministry of Education <br />
                and Training issued Circular No. 27/2019/TT-BGDĐT, regulating
                the main content displayed on higher education diplomas and
                diploma supplements.
              </Text>
            )}

            <div className={`${!mb ? 'py-20' : 'py-10'}`}>
              <div className='h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent shadow-[0_8px_20px_rgba(59,130,246,0.4)]'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5'>
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
      height={mb ? '25vh' : ''}
    />
  );
};

export default PolicyNote;
