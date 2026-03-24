import { Flex, Image } from 'antd';
import IRL from '@/assets/imgs/ies_logo_notext.png';

import SRSL from '@/assets/imgs/short_term_left_slide.jpeg';
import { Title } from '@/components';

const ShortCrsIntro = () => {
  return (
    <section>
      <div className='grid grid-cols-2 '>
        <div className='py-0.5'>
          <img src={SRSL} className='!h-3/4 !w-full !object-cover blur-[2px]' />
        </div>
        <Flex
          vertical
          justify='space-between'
          align='center'
          className='!bg-[#7680c4] !text-center !py-10 opacity-85 !h-3/4 !rounded-l-xs'
        >
          <Image
            src={IRL}
            preview={false}
            className='!w-20 !h-15 !bg-white rounded-xl opacity-80'
          />

          <div>
            <Title level={5} className='!uppercase !font-bold'>
              IES College
            </Title>
            <Title level={2} className='!m-0 !uppercase !font-bold '>
              Short-term
            </Title>
            <Title level={2} className='!m-0 !uppercase  !font-bold'>
              Training Programs
            </Title>
          </div>

          <div>
            <Title level={5} className='!m-0 !uppercase !font-bold'>
              IES College builds skills
            </Title>
            <Title level={5} className='!m-0 !uppercase !font-bold'>
              through short-term training
            </Title>
          </div>
        </Flex>
      </div>
    </section>
  );
};

export default ShortCrsIntro;
