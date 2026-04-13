import { Col, Image } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import ICL from '@/assets/imgs/intern_cl.png';
import { IesClSection, Title } from '@/components';
import { ROUTES } from '@/constants';

const InternCollab: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const navigate = useNavigate();
  const { t } = useTranslation('internCollab');
  return (
    <IesClSection
      id='internColl'
      layout='systemCardSplit'
      children={
        <Col className={`${!mb ? 'pl-25' : 'px-26 pt-10'}`}>
          <Title level={2} className='!font-bold  !mb-9'>
            {t('secTit1')} <br /> {t('secTit2')}
          </Title>

          <p className={`${!mb ? '!w-5/6' : ''}`}>{t('sectionDesc')}</p>

          <div
            className={`relative mt-10 !cursor-pointer ${!mb ? '!w-2/3' : ''}`}
            onClick={() => navigate(ROUTES.PARTNERSHIP)}
          >
            <div className='bg-blue-600 text-white px-5 py-2 font-semibold text-sm !text-center'>
              {t('exploreBtn')}
            </div>
            <div className='absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#febd25] rotate-45'></div>
          </div>
        </Col>
      }
      splitFeat={<Image src={ICL} preview={false} className='!h-100' />}
      className='bg-[#febd25] mb-40 mt-15'
      height={!mb ? '20vh' : '29vh'}
    />
  );
};

export default InternCollab;
