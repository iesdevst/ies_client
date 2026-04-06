import { Col, Image, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive';
import EVAI from '@/assets/imgs/events_ai.png';
import KTDT from '@/assets/imgs/ktdt_nfc.jpg';
import KTO from '@/assets/imgs/kto_nfc.jpg';
import TKDH from '@/assets/imgs/tkdh_nfc.jpg';
import HTDHM from '@/assets/imgs/top_str_htdhm.jpg';
import LTS from '@/assets/imgs/top_str_lts.jpg';
import MISA from '@/assets/imgs/top_str_misa.jpg';
import TSN from '@/assets/imgs/top_str_news.jpg';
import { IesClSection, Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const { Paragraph } = Typography;

const NewAndEvent: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const topSn = [
    {
      sti: EVAI,
      tit: 'Build a Web Dashboard with Claude Code....',
      specTit: 'IES workshop\n Claude Code - AI agent',
    },
    {
      sti: HTDHM,
      tit: "EHOU organizes a specialized class: 'Understanding Business Law and Economic Contracts' for students",
      specTit: 'Educational Cooperation',
    },
    {
      sti: LTS,
      tit: 'Admissions for Law Program – Hanoi Open University 2022',
      specTit: 'Admissions',
    },
    {
      sti: MISA,
      tit: 'Event on the signing of the software transfer agreement to support training between MISA Joint Stock Company and Sai Gon Information Technology and Economics College (IESCOLLEGE).',
      specTit: 'Educational Cooperation',
    },
  ];

  const featCdt = [
    {
      imgC: KTDT,
      tit: 'Electronics Engineering',
      butCard: '20-03-2026',
      des: 'Electrical and Electronics Engineering Technology: The Appeal of a Key Industrial Sector',
    },
    {
      imgC: KTO,
      tit: 'Automotive Engineering',
      butCard: '01-03-2026',
      des: 'Automotive Engineering Technology: A “High-Value” Career with a Promising Future',
    },
    {
      imgC: TKDH,
      tit: 'Graphic Design',
      butCard: '09-02-2026',
      des: 'Graphic Design: A Promising Field of Study',
    },
  ];

  return (
    <IesClSection
      id='newAe'
      layout='newsFeature'
      title='Featured News & Events'
      feature={true}
      mb={mb}
      navigateGo={ROUTES.NEWS}
      className={`mt-15 ${!mb ? 'px-10' : 'px-2'}`}
      featCard={featCdt}
      butTit='View all News & Events'
      children={
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-3.5'>
          <div>
            <Col className={`${!mb ? 'pt-6 pb-16' : 'mt-6'}`}>
              <Image src={TSN} preview={false} />
              <div className={`${!mb ? 'w-4/5' : ''}`}>
                <Title className='!text-blue-500' level={5}>
                  ACADEMICS & QUALITY ASSURANCE
                </Title>
                <Text
                  className='!text-xl !font-bold'
                  color={isDark ? 'white' : ''}
                >
                  Prof. Ngô Bảo Châu: “A university degree isn’t necessarily
                  required.”
                </Text>
              </div>
            </Col>
          </div>

          <div className='pt-6'>
            {topSn.map((item, index) => (
              <div
                className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mb-3.5 ${index === 0 ? '' : ' !border-t border-gray-300 pt-7'}`}
                key={index}
              >
                <Image
                  src={item.sti}
                  className={`col-span-1 rounded-lg ${!mb ? '!w-46 !h-25 ' : '!w-full !h-full'}`}
                  preview={false}
                />

                <div className='col-span-3 pl-5 pt-2.5'>
                  <Col className='flex flex-col col-span-2'>
                    {item.specTit && (
                      <Title level={4} className='!text-blue-500'>
                        {item.specTit}
                      </Title>
                    )}
                    <Paragraph
                      className={`${isDark ? '!text-white' : ''} !font-bold !text-md`}
                      ellipsis={{ rows: 2 }}
                    >
                      {item.tit}
                    </Paragraph>
                  </Col>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      dark={isDark}
    />
  );
};

export default NewAndEvent;
