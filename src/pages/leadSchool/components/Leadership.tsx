import ArrowUpOutlined from '@ant-design/icons/es/icons/ArrowUpOutlined';
import Button from 'antd/es/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LW from '@/assets/imgs/bgh_work.webp';
import { IesClSection, Text } from '@/components';
import { ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const Leadership = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('leadership');
  const { isDark } = useUserStore();
  const { device } = useDevice();
  const dk = device === 'desktop';
  return (
    <IesClSection
      id='leadership'
      layout='systemCardSplit'
      reverse={true}
      title={t('guid')}
      splitFeat={
        <div className='pr-5'>
          <img src={LW} alt='lw' className='rounded-xl' />
        </div>
      }
      children={
        <div className={`${dk ? 'max-w-xl' : ''} space-y-6`}>
          <Text color={isDark ? 'white' : 'black'} className='!block !text-lg'>
            {t('ourBoard')}
          </Text>
          <Text color={isDark ? 'white' : 'black'} className='!block !text-lg'>
            {t('driven')}
          </Text>

          <Button
            type='default'
            className={`!bg-transparent  ${isDark ? 'hover:!text-[#9fe7f9]' : '!border-black !text-black hover:!text-[#0d52ca]'}`}
            onClick={() => navigate(ROUTES.ADMISSIONSVOCA_ALL)}
          >
            {t('exMore')}
            <ArrowUpOutlined className='!rotate-45' />
          </Button>
        </div>
      }
      className={`${dk ? '!px-40' : ''}`}
    />
  );
};

export default Leadership;
