import { Col, Image, Row } from 'antd';
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
  return (
    <IesClSection
      id='skip-exam'
      layout='simple'
      divider={false}
      children={
        <section className='bg-[#0B1E3A] p-35'>
          <div className='!space-y-15'>
            <Title level={4} className='!text-white'>
              No entrance exam
            </Title>

            <Row gutter={[16, 30]} className='px-10'>
              {skipExamDt.map((skip) => (
                <Row
                  key={skip.tit}
                  gutter={[200, 30]}
                  className='py-10 !rounded-4xl bg-gradient-to-r from-transparent white to-transparent shadow-[0_15px_70px_rgba(59,130,246,0.4)]'
                >
                  <Col span={12}>
                    <Title className='!text-white'>{skip.tit}</Title>
                    <Text color='white'>{skip.decs}</Text>
                  </Col>
                  <Col span={12}>
                    <Image
                      src={skip.img}
                      preview={false}
                      className='!rounded-sm'
                    />
                  </Col>
                </Row>
              ))}
            </Row>
          </div>
        </section>
      }
    />
  );
};

export default SkipExam;
