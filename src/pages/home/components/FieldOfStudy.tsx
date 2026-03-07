import { RightOutlined } from '@ant-design/icons';
import { Button, Col, Image, List, Row } from 'antd';

import DVKS from '@/assets/imgs/dv_ks.svg';
import FBL from '@/assets/imgs/field_bot_left.avif';
import MAVT from '@/assets/imgs/ies_logo_text.png';
import KDQL from '@/assets/imgs/kd_qly.svg';
import THVP from '@/assets/imgs/th_vp.svg';
import TKST from '@/assets/imgs/tk_st.svg';
import { IesClSection, Text, Title } from '@/components';

const FieldOfStudy: React.FC = () => {
  const fieldProDt = [
    {
      icon: THVP,
      tit: 'IT & Office',
      fieldLst: [
        {
          key: 1,
          fie: 'Applied Informatics',
        },
        {
          key: 2,
          fie: 'Office Administration',
        },
      ],
    },
    {
      icon: DVKS,
      tit: 'Hospitality & Services',
      fieldLst: [
        {
          key: 1,
          fie: 'Hotel Management & Business',
        },
      ],
    },
    {
      icon: TKST,
      tit: 'Design & Creativity',
      fieldLst: [
        {
          key: 1,
          fie: 'Fine Arts Design',
        },
      ],
    },
    {
      icon: KDQL,
      tit: 'Business & Management',
      fieldLst: [
        {
          key: 1,
          fie: 'Business Administration',
        },
        {
          key: 2,
          fie: 'Marketing',
        },
        {
          key: 3,
          fie: 'Accounting',
        },
      ],
    },
  ];
  return (
    <IesClSection
      id='fieldOfSt'
      layout='simple'
      divider={false}
      children={
        <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-8 mb-3.5 mt-15 pt-18 bg-[#f5f6fc]'>
          <Col className='!flex !flex-col col-span-2 !gap-y-10'>
            <div className='pl-20'>
              <Title>Field of study & Academic track</Title>
              <Text>
                IES currently offers 4 training fields with 7 academic programs,
                focusing on areas that meet the workforce demands of society.
                The training programs are designed with a practical orientation
                and are linked with partner universities, providing students
                with opportunities to continue their studies at higher levels
                after graduation.
              </Text>
              <div>
                <Button className='!bg-transparent !p-0 mt-3' type='text'>
                  <Title className='!m-0 !text-black' level={4}>
                    Explore all Majors
                  </Title>
                  <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                    <RightOutlined className='!text-red-500 !font-semibold ' />
                  </div>
                </Button>
              </div>
            </div>

            <Image
              src={FBL}
              preview={false}
              className='!rotate-[90deg] !w-60 !h-60'
            />
          </Col>

          <div className='col-span-4'>
            <Row className='gap-x-20' justify={'start'} align={'top'}>
              {fieldProDt.map((item, index) => (
                <Row
                  key={index}
                  align={'top'}
                  justify={'start'}
                  className='mb-22 gap-x-3'
                >
                  <Image src={item.icon} preview={false} />
                  <Col>
                    <Title level={3}>{item.tit}</Title>
                    <List
                      dataSource={item.fieldLst}
                      renderItem={(item) => (
                        <List.Item
                          className='!text-black !p-0 !pb-2 !text-lg'
                          key={item.key}
                          style={{ borderBottom: 'none' }}
                        >
                          {item.fie}
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              ))}
              <div className='ml-auto mt-25'>
                <Image src={MAVT} className='!w-60 !h-60' preview={false} />
              </div>
            </Row>
          </div>
        </div>
      }
    />
  );
};

export default FieldOfStudy;
