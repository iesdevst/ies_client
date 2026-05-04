import { Col, Image, Row } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import HS from '@/assets/imgs/high_sc_skip_ex.jpeg';
import IL from '@/assets/imgs/intermediate_lv_skip_ex.jpeg';
import OFC from '@/assets/imgs/officer_skip_ex.jpeg';
import US from '@/assets/imgs/uni_stu_skip_ex.jpeg';
import { IesClSection, Text, Title } from '@/components';

const SkipExam: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('skipExam');

  const skipExamDt = useMemo(
    () => [
      {
        tit: t('i1t'),
        decs: t('i1d'),
        img: OFC,
      },
      {
        tit: t('i2t'),
        decs: t('i2d'),
        img: US,
      },
      {
        tit: t('i3t'),
        decs: t('i3d'),
        img: HS,
      },
      {
        tit: t('i4t'),
        decs: t('i4d'),
        img: IL,
      },
    ],
    [t],
  );
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
              {t('t')}
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
                        loading='lazy'
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
