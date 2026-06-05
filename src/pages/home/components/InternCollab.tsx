import ArrowUpOutlined from '@ant-design/icons/es/icons/ArrowUpOutlined';
import Button from 'antd/es/button';
import Flex from 'antd/es/flex';
import { lazy, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ICLHZ from '@/assets/imgs/hou_cl_hozi.webp';
import ICL from '@/assets/imgs/hou_hl.webp';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const InternCollab: React.FC = () => {
  const { device } = useDevice();
  const { t } = useTranslation('internCollab');
  const navigate = useNavigate();

  const mb = device === 'mobile';
  const tl = device === 'tablet';
  const tlpr = device === 'tabletPro';
  const dk = device === 'desktop';

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.PARTNERSHIP);
  }, [navigate]);
  return (
    <IesClSection
      id='internColl'
      layout='systemCardSplit'
      children={
        <Flex
          vertical
          align={mb ? 'center' : tl ? 'center' : 'flex-start'}
          gap={15}
          className={dk ? 'max-w-md' : tlpr ? 'max-w-md' : 'w-full'}
        >
          <Title level={1} className='!font-bold !text-black !m-0'>
            {t('secTit')}
          </Title>

          <Text color='black' className='block mb-5 !text-lg'>
            {t('sectionDesc')}
          </Text>

          <Button
            onClick={handleNavigate}
            type='default'
            className='!bg-black !text-white !border-none'
          >
            {t('moreBtn')} <ArrowUpOutlined className='!rotate-45' />
          </Button>
        </Flex>
      }
      splitFeat={
        <Flex justify='center' align='center'>
          <div className='py-15'>
            <img src={tl ? ICLHZ : ICL} alt='incoll' className='!rounded-2xl' />
          </div>
        </Flex>
      }
      className={`!bg-[#5bd4ce] mb-40 mt-15 ${dk ? 'px-50' : tlpr ? 'px-10' : 'px-5 pt-15'}`}
    />
  );
};

export default InternCollab;
