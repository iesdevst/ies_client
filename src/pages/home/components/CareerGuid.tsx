import { Carousel, Flex } from 'antd';
import CNTT from '@/assets/imgs/cntt_hn.png';
import CC from '@/assets/imgs/ctm_hn_card.jpg';
import KTDN from '@/assets/imgs/ktdn_hn.png';
import MKT from '@/assets/imgs/mkt_hn.png';
import MC from '@/assets/imgs/mtk_hn_card.webp';
import QLDN from '@/assets/imgs/qldn_hn.png';
import QLKS from '@/assets/imgs/qlks_hn.jpg';
import { default as TC, default as THDU } from '@/assets/imgs/thud_hn.png';
import TKVP from '@/assets/imgs/tkvp_hn.png';
import VTK from '@/assets/imgs/vtk_hn.png';
import { IesClSection, Text, Title } from '@/components';

const CareerGuid: React.FC = () => {
  const cgSlide = [
    { cTit: 'Applied Information Technology', cImg: THDU },
    { cTit: 'Information Technology', cImg: CNTT },
    { cTit: 'Office Secretary', cImg: TKVP },
    { cTit: 'Hospitality Management', cImg: QLKS },
    { cTit: 'Marketing', cImg: MKT },
    { cTit: 'Business Management', cImg: QLDN },
    { cTit: 'Computer-Aided Graphic Design', cImg: VTK },
    { cTit: 'Business Accounting', cImg: KTDN },
  ];

  const cgCard = [
    {
      imgC: MC,
      des: 'Marketing – A Safe Career Choice for Gen Z: Explore and Discover',
    },
    { imgC: CC, des: 'Exploring Mechanical Manufacturing Technology' },
    {
      imgC: TC,
      des: 'Applied Information Technology and Career Opportunities for Gen Z',
    },
  ];

  return (
    <IesClSection
      id='carerrGuid'
      layout='newsFeature'
      feature={true}
      children={
        <div className='mt-15 !space-y-10 mb-15'>
          <Flex
            justify='space-between'
            align='center'
            className='!px-20 !w-full'
          >
            <Title className='flex-1 !font-bold !m-0'>Career guidance</Title>
            <div className='flex-1'>
              <Text className='!text-lg font-semibold'>
                Career Guidance helps students discover their strengths and
                interests to choose suitable career paths. It supports them in
                exploring opportunities and pursuing goals, helping them achieve
                their careers and contribute to society.
              </Text>
            </div>
          </Flex>

          <div className='w-full pr-20 pl-32'>
            <Carousel
              autoplay={false}
              dots={false}
              arrows={true}
              slidesPerRow={4}
            >
              {cgSlide.map((item, index) => (
                <div key={index} className='!pr-10'>
                  <div className='relative rounded-xl overflow-hidden'>
                    <img
                      src={item.cImg}
                      style={{
                        width: '100%',
                        height: '10vh',
                        objectFit: 'cover',
                      }}
                      className='!rounded-xl '
                    />
                    <div className='absolute bottom-0 left-0 pl-2 pb-1'>
                      <Text
                        className='!m-0 !text-white bg-blue-500 rounded-lg px-1.5 !py-0 opacity-[0.9]'
                        key={index}
                      >
                        {item.cTit}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      }
      bonusTit='Career Exploration Project'
      moreBut='Explore all Projects'
      featCard={cgCard}
      moreClass='px-20'
    />
  );
};

export default CareerGuid;
