import ArrowUpOutlined from '@ant-design/icons/es/icons/ArrowUpOutlined';
import Button from 'antd/es/button';
import Flex from 'antd/es/flex';
import { lazy, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import ICL from '@/assets/imgs/hou_hl.webp';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));

const InternCollab: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const navigate = useNavigate();
  const { t } = useTranslation('internCollab');

  const handleNavigate = useCallback(() => {
    navigate(ROUTES.PARTNERSHIP);
  }, [navigate]);
  return (
    <IesClSection
      id='internColl'
      layout='systemCardSplit'
      children={
        <Flex vertical align='start' gap={15} className='max-w-md'>
          <Title level={1} className='!font-bold !text-black !m-0'>
            {t('secTit')}
          </Title>

          <Text color='black' className={`${!mb ? '!w-5/6' : ''} block mb-5`}>
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
            <img src={ICL} alt='incoll' className='!rounded-2xl' />
          </div>
        </Flex>
      }
      className='!bg-[#5bd4ce] mb-40 mt-15 px-50'
      height={!mb ? '20vh' : '29vh'}
    />
  );
};

export default InternCollab;
