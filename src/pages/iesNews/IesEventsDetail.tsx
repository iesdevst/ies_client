import { RightOutlined } from '@ant-design/icons';
import Breadcrumb from 'antd/es/breadcrumb';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import ContactKey from '../home/components/ContactKey';
import DetailsBonus from './components/DetailsBonus';
import { useEventLstData, useEventsData, useNewsLstData } from './hooks';
import { IesClSection, Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesEventsDetails = () => {
  const { t } = useTranslation('iesEventsDetail');
  const { id } = useParams();
  const { data } = useEventsData();

  const { data: newsLst } = useNewsLstData();
  const { data: evLst } = useEventLstData();

  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const detailDt = useMemo(() => {
    if (!data || !id) return;
    return data.find((item) => String(item.id) === String(id));
  }, [data, id]);

  const latestEv = useMemo(() => {
    return [...evLst]
      .filter((item) => item.id !== id)
      .sort(
        (a, b) => new Date(b.evDate).getTime() - new Date(a.evDate).getTime(),
      )
      .slice(0, 3);
  }, [evLst, id]);

  const latestNews = useMemo(() => {
    return [...newsLst]
      .sort(
        (a, b) =>
          new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime(),
      )
      .slice(0, 3);
  }, [newsLst]);

  const breadcrumbItems = useMemo(
    () => [
      {
        title: (
          <PrefetchLink
            to={ROUTES.EVENTS}
            style={{
              color: 'black',
              fontWeight: 700,
              fontSize: '15px',
            }}
          >
            {t('eventP')}
          </PrefetchLink>
        ),
      },
      {
        title: (
          <Text color='#545969' className='!text-[16px] !font-bold'>
            {t('eventD')}
          </Text>
        ),
      },
    ],
    [t],
  );

  const paddingClass = mb || tl ? '' : '';

  const titleLv = mb || tl ? 3 : 1;

  if (!detailDt) return;

  return (
    <section>
      {/* BREADCRUMB */}
      <Breadcrumb
        className={`${
          mb ? '!ml-5 !mb-10' : tl ? '!ml-10 !mb-15' : '!ml-25 !py-15'
        }`}
        separator={<RightOutlined className='!text-black mx-6' />}
        items={breadcrumbItems}
      />
      {detailDt && latestNews && latestEv && (
        <IesClSection
          layout='naiPage'
          mb={mb}
          tl={tl}
          id='evsec'
          newsTit={detailDt.eventTit}
          decs={detailDt.desc}
          decs2={detailDt.decs2 ? detailDt.decs2 : ''}
          img={detailDt.img}
          imgBonus={detailDt.imgBonus ? detailDt.imgBonus : []}
          linkTo={detailDt.desc ? detailDt.linkTo : ''}
          paddingClass={paddingClass}
          titleLv={titleLv}
          nOe={t('events')}
          readOri={t('readOri')}
          recentNews={latestNews}
          recentEv={latestEv}
          children={<DetailsBonus />}
        />
      )}
      <ContactKey />
    </section>
  );
};

export default IesEventsDetails;
