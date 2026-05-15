import RightOutlined from '@ant-design/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams, useSearchParams } from 'react-router-dom';

import ContactKey from '../home/components/ContactKey';
import DetailsBonus from './components/DetailsBonus';
import { useEventLstData, useNewsData, useNewsLstData } from './hooks';
import { IesClSection, Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

const IesNewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const authorN = searchParams.get('authorN');
  const newsDate = searchParams.get('newsDate');
  const currUrl = window.location.href;
  const { t } = useTranslation('iesNewsDetails');
  const { isDark } = useUserStore();
  const { data } = useNewsData();
  const { data: newsLst } = useNewsLstData();
  const { data: evLst } = useEventLstData();

  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const detailDt = useMemo(() => {
    if (!id) return null;
    return data.find((item) => String(item.id) === id) || null;
  }, [data, id]);

  const latestNews = useMemo(() => {
    return [...newsLst]
      .filter((item) => item.id !== id)
      .sort(
        (a, b) =>
          new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime(),
      )
      .slice(0, 3);
  }, [newsLst, id]);

  const latestEv = useMemo(() => {
    return [...evLst]
      .sort(
        (a, b) => new Date(b.evDate).getTime() - new Date(a.evDate).getTime(),
      )
      .slice(0, 3);
  }, [evLst]);

  const breadcrumbItems = useMemo(
    () => [
      {
        title: (
          <PrefetchLink
            to={ROUTES.NEWS}
            style={{
              color: isDark ? 'white' : 'black',
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            {t('newsP')}
          </PrefetchLink>
        ),
      },
      {
        title: (
          <Text
            color={isDark ? '#74abf9' : '#545969'}
            className='!text-[16px] !font-bold'
          >
            {t('newsD')}
          </Text>
        ),
      },
    ],
    [t, isDark],
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
        separator={
          <RightOutlined
            className={`${isDark ? '!text-white' : '!text-black'} px-6`}
          />
        }
        items={breadcrumbItems}
      />
      {detailDt && latestNews && latestEv && (
        <IesClSection
          layout='naiPage'
          mb={mb}
          tl={tl}
          id='newsec'
          newsTit={detailDt.newsTit}
          ato={authorN ? authorN : ''}
          date={newsDate ? newsDate : ''}
          decs={detailDt.desc}
          decs2={detailDt.decs2 ? detailDt.decs2 : ''}
          img={detailDt.img}
          imgBonus={detailDt.imgBonus ? detailDt.imgBonus : []}
          linkTo={detailDt.desc ? detailDt.linkTo : ''}
          urlForShare={currUrl}
          paddingClass={paddingClass}
          titleLv={titleLv}
          nOe={t('news')}
          readOri={t('readOri')}
          recentNews={latestNews}
          recentEv={latestEv}
          dark={isDark}
          children={<DetailsBonus dark={isDark} />}
        />
      )}
      <ContactKey />
    </section>
  );
};

export default IesNewsDetails;
