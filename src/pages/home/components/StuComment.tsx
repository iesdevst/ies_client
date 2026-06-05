import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import STUC from '@/assets/imgs/stu_cm.webp';
import STBG from '@/assets/imgs/stu_cmt_bg.webp';
import { Text } from '@/components';
import { useDevice } from '@/hooks';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const StuComment = () => {
  const { t } = useTranslation('stuComment');
  const { device } = useDevice();

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  return (
    <IesClSection
      id='stuCm'
      layout='simple'
      divider={false}
      children={
        <div className='relative w-full h-full'>
          <div className='absolute !w-full !h-full !inset-0 bg-[#090a20]/90'></div>
          <Flex
            vertical={mb || tl}
            justify='space-between'
            align={mb ? 'center' : tl ? 'center' : 'flex-start'}
            className={`!py-25 ${!mb ? '!pt-23 !px-25' : ''}`}
            gap={!mb ? 60 : 10}
          >
            <div className={`flex-1 flex justify-end ${mb ? 'px-3' : ''}`}>
              <img
                src={STUC}
                className='!h-[450px] !w-[380px] object-cover !rounded-b-[200px]'
                style={{
                  clipPath: 'ellipse(75% 60% at 50% 40%)',
                }}
                alt='stucm'
              />
            </div>
            <div className='flex-2'>
              <Col
                className={`!space-y-5 ${mb ? 'px-6.5 mt-10' : tl ? '' : 'pl-15 mt-15'}`}
              >
                <Text color='#e0e1e2' className='!text-lg'>
                  {t('stuVoid')}
                </Text>
                <div className='space-y-1 !mt-5'>
                  <Text color='white' className='!block !font-bold !text-xl'>
                    {t('name')}
                  </Text>
                  <Text color='#a5a7b9' className='!block !text-lg'>
                    {t('stu')}
                  </Text>
                </div>
              </Col>
            </div>
          </Flex>
        </div>
      }
      className='!my-10'
      style={{
        backgroundImage: `url(${STBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fill',
        // backgroundAttachment: 'fixed',
      }}
    />
  );
};

export default StuComment;
