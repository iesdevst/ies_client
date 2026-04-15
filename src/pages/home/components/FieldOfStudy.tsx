import { RightOutlined } from '@ant-design/icons';
import { Button, Col, Image, List, Row } from 'antd';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import DVKS from '@/assets/imgs/dv_ks.svg';
import FBL from '@/assets/imgs/field_bot_left.avif';
import KDQL from '@/assets/imgs/kd_qly.svg';
import THVP from '@/assets/imgs/th_vp.svg';
import TKST from '@/assets/imgs/tk_st.svg';
import { IesClSection, Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const FieldOfStudy: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const navigate = useNavigate();
  const { isDark } = useUserStore();
  const { t } = useTranslation('fieldOfStudy');
  const fieldProDt = [
    {
      icon: THVP,
      tit: t('itOffice'),
      fieldLst: [
        {
          key: 1,
          fie: t('appliedInfo'),
        },
        {
          key: 2,
          fie: t('officeAdmin'),
        },
      ],
    },
    {
      icon: DVKS,
      tit: t('hospServ'),
      fieldLst: [
        {
          key: 1,
          fie: t('hotelMng'),
        },
      ],
    },
    {
      icon: TKST,
      tit: t('designCreat'),
      fieldLst: [
        {
          key: 1,
          fie: t('fineArts'),
        },
      ],
    },
    {
      icon: KDQL,
      tit: t('busiMng'),
      fieldLst: [
        {
          key: 1,
          fie: t('busiAdmin'),
        },
        {
          key: 2,
          fie: t('marketing'),
        },
        {
          key: 3,
          fie: t('accounting'),
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
        <div
          className={`grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-8 mb-3.5 mt-15 ${isDark ? '!bg-gray-700' : 'bg-[#f5f6fc]'} ${!mb ? 'pt-18' : 'py-18'}`}
        >
          <Col className='!flex !flex-col col-span-6 md:col-span-2 lg:col-span-2 !gap-y-10'>
            <div className={`${!mb ? 'pl-20' : 'px-5'}`}>
              <Title className={`${isDark ? '!text-white' : ''}`}>
                {t('sectionTitle')}
              </Title>
              <Text color={isDark ? 'white' : ''} className='!text-lg'>
                {t('sectionDesc')}
              </Text>
              <div>
                <Button
                  className='!bg-transparent !p-0 mt-3'
                  type='text'
                  onClick={() => navigate(ROUTES.ADMISSIONSVOCA_ALL)}
                >
                  <Title
                    className={`!m-0 ${isDark ? '!text-white' : '!text-black'}`}
                    level={4}
                  >
                    {t('exploreBtn')}
                  </Title>
                  <div className='w-full h-full !bg-[#FBBF24] rounded-r-full flex items-center justify-center px-3'>
                    <RightOutlined className='!text-red-500 !font-semibold ' />
                  </div>
                </Button>
              </div>
            </div>

            {!mb && (
              <Image
                src={FBL}
                preview={false}
                className='!rotate-[90deg] !w-60 !h-60'
              />
            )}
          </Col>

          <div className='col-span-6 md:col-span-4 lg:col-span-4'>
            <Row className='gap-x-20' justify={'start'} align={'top'}>
              {fieldProDt.map((item, index) => (
                <Row
                  key={index}
                  align={'top'}
                  justify={'start'}
                  className={`gap-x-3 ${!mb ? 'mb-22 ' : '!ml-2.5 mb-5'}`}
                >
                  <Image src={item.icon} preview={false} />
                  <Col>
                    <Title
                      level={3}
                      className={`${isDark ? '!text-white' : '!text-black'}`}
                    >
                      {item.tit}
                    </Title>
                    <List
                      dataSource={item.fieldLst}
                      renderItem={(item) => (
                        <List.Item
                          className={`!p-0 !pb-2 !text-lg ${isDark ? '!text-white' : '!text-black'}`}
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
            </Row>
          </div>
        </div>
      }
      height={!mb ? '' : '36vh'}
    />
  );
};

export default FieldOfStudy;
