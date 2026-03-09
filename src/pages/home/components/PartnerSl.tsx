import { Carousel, Col, Flex, Image } from 'antd';

import CNPH from '@/assets/imgs/cnph_tt.svg';
import DO from '@/assets/imgs/div_oost_tt.webp';
import FS from '@/assets/imgs/form_square_tt.jpg';
import GTTT from '@/assets/imgs/gt_tt.jpg';
import HS from '@/assets/imgs/hansa_tt.webp';
import LH from '@/assets/imgs/luxel_home.webp';
import RA from '@/assets/imgs/radian_tt.jpg';
import WW from '@/assets/imgs/work_wise_tt.webp';
import { IesClSection, Text, Title } from '@/components';

import styles from '@/components/SPS/iesCl.module.scss';

const PartnerSl: React.FC = () => {
  const data = [GTTT, CNPH, LH, HS, RA, WW, FS, DO];

  return (
    <IesClSection
      id='partenSl'
      layout='simple'
      divider={false}
      children={
        <div className='mt-15'>
          <Flex
            justify='space-between'
            align='start'
            className='!px-45 !w-full'
          >
            <Col className='flex-1'>
              <Title className=' !font-bold !m-0'>Internship Partner</Title>
              <Title className='!font-bold !m-0'>Institution</Title>
            </Col>
            <div className='flex-1'>
              <Text className=''>
                An institution that collaborates with businesses to develop and
                coordinate internship programs, creating opportunities for
                students to participate in real-world projects and apply
                knowledge in practical situations. Through these partnerships,
                students gain hands-on experience and develop professional
                skills in real working environments, preparing them for future
                careers.
              </Text>
            </div>
          </Flex>

          <div className='w-full'>
            <Carousel
              autoplay
              pauseOnHover={false}
              dots={true}
              arrows={false}
              slidesPerRow={4}
              className={`${styles.dotTrainCustom} dot-train my-15 px-30`}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <Flex justify='space-between' align='start'>
                    <Image
                      src={item}
                      style={{
                        width: '100%',
                        height: '15vh',
                        objectFit: 'cover',
                      }}
                      className='px-15 mb-5'
                      preview={false}
                    />
                  </Flex>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      }
    />
  );
};

export default PartnerSl;
