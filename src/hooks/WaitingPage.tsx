import Result from 'antd/es/result';
import Spin from 'antd/es/spin';
import { useTranslation } from 'react-i18next';

const WaitingPage = () => {
  const { t } = useTranslation('waitingPage');
  return (
    <div className='h-screen flex items-center justify-center'>
      <Result
        icon={<Spin size='large' />}
        title={t('updating')}
        subTitle={t('soonUpt')}
      />
    </div>
  );
};

export default WaitingPage;
