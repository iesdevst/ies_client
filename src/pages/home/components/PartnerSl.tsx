import Carousel from 'antd/es/carousel';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import CNPH from '@/assets/imgs/cnph_tt.svg';
import DO from '@/assets/imgs/div_oost_tt.webp';
import FS from '@/assets/imgs/form_square_tt.webp';
import GTTT from '@/assets/imgs/gt_tt.webp';
import HS from '@/assets/imgs/hansa_tt.webp';
import LH from '@/assets/imgs/luxel_home.webp';
import RA from '@/assets/imgs/radian_tt.webp';
import WW from '@/assets/imgs/work_wise_tt.webp';

import { IesClSection, Text, Title } from '@/components';
import styles from '@/components/SPS/iesCl.module.scss';
import { useUserStore } from '@/store';

const PartnerSl: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const { isDark } = useUserStore();
  const { t } = useTranslation('partnerSl');

  const images = useMemo(() => [GTTT, CNPH, LH, HS, RA, WW, FS, DO], []);

  return (
    <IesClSection
      id='partenSl'
      layout='simple'
      divider={false}
      children={
        <div className='mt-15'>
          <Flex
            vertical={mb}
            justify='space-between'
            align={!mb ? 'start' : 'center'}
            className={`!w-full ${!mb ? '!px-45' : ''}`}
          >
            <Col className='flex-1'>
              <Title
                className={`!m-0 !font-bold ${isDark ? '!text-white' : '!text-black'}`}
              >
                {t('intershipP')}
              </Title>
              <Title
                className={`!font-bold !m-0 ${isDark ? '!text-white' : ''} ${!mb ? '' : 'text-center'}`}
              >
                {t('ins')}
              </Title>
            </Col>

            <Text
              className={`!block flex-1 px-5 mt-2 ${!isTablet ? '!text-lg' : 'px-15 mt-5 !text-2xl'}`}
              color={isDark ? 'white' : ''}
            >
              {t('descAn')}
            </Text>
          </Flex>

          <div className='w-full'>
            <Carousel
              autoplay
              pauseOnHover={false}
              dots={!mb ? true : false}
              arrows={false}
              effect={!mb ? 'fade' : 'scrollx'}
              slidesPerRow={!mb ? 4 : 2}
              className={`${styles.dotTrainCustom} dot-train my-15 ${!isTablet ? '' : 'pr-20'}`}
            >
              {images.map((item, index) => (
                <div key={index}>
                  <Flex
                    justify={!mb ? 'space-between' : 'center'}
                    align='start'
                  >
                    <Image
                      src={item}
                      style={{
                        width: isTablet || mb ? '90%' : '100%',
                        height: '15vh',
                        objectFit: 'cover',
                      }}
                      className={`${!mb ? 'px-15 mb-5' : ''}`}
                      preview={false}
                    />
                  </Flex>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      }
      height={!mb ? '' : '45vh'}
    />
  );
};

export default PartnerSl;
