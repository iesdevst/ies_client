import { Col, Image, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import HS from '@/assets/imgs/high_sc_skip_ex.jpeg';
import IL from '@/assets/imgs/intermediate_lv_skip_ex.jpeg';
import OFC from '@/assets/imgs/officer_skip_ex.jpeg';
import US from '@/assets/imgs/uni_stu_skip_ex.jpeg';
import { IesClSection, Text, Title } from '@/components';

const skipExamDt = [
  {
    tit: 'No Entrance Exam Requirement for Working Professionals',
    decs: 'Learners who are government officials, civil servants, or individuals currently working in agencies, organizations, state-owned or private enterprises, or the armed forces, and who have already obtained a high school diploma or higher (vocational secondary, college, university, etc.)',
    img: OFC,
  },
  {
    tit: 'No Entrance Exam Requirement for Current College/University Students',
    decs: 'Students currently studying at colleges or universities',
    img: US,
  },
  {
    tit: 'No Entrance Exam Requirement for Recent High School Graduates',
    decs: 'Students who have just graduated from high school',
    img: HS,
  },
  {
    tit: 'No Entrance Exam Requirement for Intermediate-Level Graduates',
    decs: 'Graduates of intermediate-level (vocational secondary) programs',
    img: IL,
  },
];

const SkipExam: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  return (
    <IesClSection
      id='skip-exam'
      layout='simple'
      divider={false}
      children={
        <section className={`bg-[#0B1E3A] ${!mb ? 'p-35' : 'px-5 py-15'}`}>
          <div className='!space-y-8 md:!space-y-5 lg:!space-y-15'>
            <Title
              level={4}
              className={`!text-white ${!mb ? '' : '!text-center'}`}
            >
              No entrance exam
            </Title>

            <Row gutter={[16, 30]}>
              {skipExamDt.map((skip) => (
                <Col key={skip.tit} xs={24}>
                  <Row
                    gutter={[16, 20]}
                    className='py-6 px-2 md:px-5 lg:px-5 md:py-8 lg:py-10 !rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_15px_70px_rgba(59,130,246,0.4)]'
                    align='middle'
                  >
                    {/* TEXT */}
                    <Col xs={24} md={12}>
                      <Title level={!mb ? 3 : 4} className='!text-white'>
                        {skip.tit}
                      </Title>

                      <Text className='!text-white  md:!text-lg'>
                        {skip.decs}
                      </Text>
                    </Col>

                    {/* IMAGE */}
                    <Col xs={24} md={12}>
                      <Image
                        src={skip.img}
                        preview={false}
                        className='!rounded-lg !w-full'
                      />
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </section>
      }
    />
  );
};

export default SkipExam;
