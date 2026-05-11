import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import STUC from '@/assets/imgs/stu_cm.webp';
import STBG from '@/assets/imgs/stu_cmt_bg.webp';
import { IesClSection } from '@/components';

const StuComment = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('stuComment');
  return (
    <IesClSection
      id='stuCm'
      layout='simple'
      divider={false}
      children={
        <div className='relative w-full h-full'>
          <div className='absolute w-full h-full inset-0 bg-[#090a20]/90'></div>
          <Flex
            vertical={mb}
            justify='space-between'
            align={!mb ? 'flex-start' : 'center'}
            className={`!py-25 ${!mb ? '!pt-23 !px-25' : ''}`}
            gap={!mb ? 60 : 10}
          >
            <div className={`flex-1 flex justify-end ${!mb ? '' : 'px-3'}`}>
              <Image
                src={STUC}
                preview={false}
                className='!h-[450px] !w-[380px] object-cover !rounded-b-[200px]'
                style={{
                  clipPath: 'ellipse(75% 60% at 50% 40%)',
                }}
              />
            </div>
            <div className='flex-2'>
              <Col
                className={`!space-y-5 ${!mb ? "'pl-15 mt-15'" : 'px-6.5 mt-10'}`}
              >
                <p
                  className={`!text-[#e0e1e2]  ${!mb ? 'pr-7 !text-[24px]' : '!text-sm'}`}
                >
                  {t('stuVoid')}
                </p>
                <div className='space-y-1'>
                  <p className='!text-white !font-bold text-xl'>{t('name')}</p>
                  <p className='text-[#a5a7b9] text-lg'>{t('stu')}</p>
                </div>
              </Col>
            </div>
          </Flex>
        </div>
      }
      className='!min-h-[60vh]'
      style={{
        backgroundImage: `url(${STBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    />
  );
};

export default StuComment;
