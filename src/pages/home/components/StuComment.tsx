import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

import STUC from '@/assets/imgs/stu_cm.webp';
import STBG from '@/assets/imgs/stu_cmt_bg.webp';
import { IesClSection } from '@/components';

const StuComment: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('stuComment');

  return (
    <IesClSection
      id='stuCm'
      layout='simple'
      divider={false}
      className='!min-h-[60vh]'
      style={{
        backgroundImage: `url(${STBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className='relative w-full min-h-[60vh]'>
        {/* overlay */}
        <div className='absolute inset-0 bg-[#090a20]/90' />

        <Flex
          vertical={mb}
          justify='space-between'
          align={mb ? 'center' : 'flex-start'}
          gap={mb ? 10 : 60}
          className={`relative z-10 ${mb ? 'py-16 px-6' : 'py-25 px-25'}`}
        >
          {/* image */}
          <div
            className={`flex-1 flex ${mb ? 'justify-center' : 'justify-end'}`}
          >
            <Image
              src={STUC}
              preview={false}
              className='h-[450px] w-[380px] object-cover rounded-b-[200px]'
              style={{
                clipPath: 'ellipse(75% 60% at 50% 40%)',
              }}
              loading='lazy'
              alt='stuc'
            />
          </div>

          {/* text */}
          <div className='flex-1'>
            <div className={`space-y-5 ${mb ? 'px-6 mt-10' : 'pl-15 mt-15'}`}>
              <p
                className={`text-[#e0e1e2] ${mb ? 'text-sm' : 'text-[24px] pr-7'}`}
              >
                {t('stuVoid')}
              </p>

              <div className='space-y-1'>
                <p className='text-white font-bold text-xl'>{t('name')}</p>
                <p className='text-[#a5a7b9] text-lg'>{t('stu')}</p>
              </div>
            </div>
          </div>
        </Flex>
      </div>
    </IesClSection>
  );
};

export default StuComment;
