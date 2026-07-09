import RightOutlined from '@ant-design/icons/es/icons/RightOutlined';
import Button from 'antd/es/button';
import { lazy, Suspense, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import TSN from '@/assets/imgs/top_str_news.webp';
import TSNMB from '@/assets/imgs/top_str_news_mb.webp';
import { Text, Title } from '@/components';
import { IES_NAVY, IES_ORANGE, ROUTES } from '@/constants';
import { useDevice } from '@/hooks';
import type { EvsNavi } from '@/pages/iesNews/components/EvsLst';
import type { NewsNavi } from '@/pages/iesNews/components/NewsLst';
import { useEventLstData, useNewsLstData } from '@/pages/iesNews/hooks';
import { useUserStore } from '@/store';

const IesClSection = lazy(() => import('@/components/SPS/IesClSection'));
const EventFeatureCard = lazy(() => import('./EventFeatureCard'));
const NewsHeadlineRow = lazy(() => import('./NewsHeadlineRow'));

const NewAndEvent: React.FC = () => {
  const { device } = useDevice();
  const { isDark, locale } = useUserStore();
  const { t } = useTranslation('newAndEvent');
  const navigate = useNavigate();

  const mb = device === 'mobile';

  const { data: topNews } = useNewsLstData();
  const { data: featEvs } = useEventLstData();

  const hdlNavigateNews = useCallback(
    (navi: NewsNavi) => {
      const searchParams = new URLSearchParams({
        authorN: navi.authorN,
        newsDate: navi.newsDate,
      });
      navigate(`${ROUTES.NEWS_DETAILS}/${navi.id}?${searchParams.toString()}`);
    },
    [navigate],
  );

  const hdlNavigateEvent = useCallback(
    (navi: EvsNavi) => {
      const searchParams = new URLSearchParams({
        authorN: navi.authorN,
        evDate: navi.evDate,
      });
      navigate(
        `${ROUTES.EVENTS_DETAILS}/${navi.id}?${searchParams.toString()}`,
      );
    },
    [navigate],
  );

  const latestNews = useMemo(() => {
    return [...topNews]
      .sort(
        (a, b) =>
          new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime(),
      )
      .slice(0, 4);
  }, [topNews]);

  const latestEv = useMemo(() => {
    return [...featEvs]
      .sort(
        (a, b) => new Date(b.evDate).getTime() - new Date(a.evDate).getTime(),
      )
      .slice(0, 3);
  }, [featEvs]);

  const heroNews = useMemo(
    () => topNews.find((item) => item.id === '6') ?? topNews[0],
    [topNews],
  );

  return (
    <IesClSection
      id='newAe'
      layout='simple'
      divider={false}
      dark={isDark}
      className={`my-30! ${mb ? 'px-2!' : 'px-10!'}`}
    >
      {/* masthead */}
      <div
        className={`flex! ${mb ? 'flex-col!' : 'flex-row!'} items-center! justify-between! gap-4! pb-5! border-b! ${isDark ? 'border-[#332f45]!' : 'border-[#e5e2ed]!'} mb-10!`}
      >
        <Title
          style={{
            color: isDark ? '#fff' : IES_NAVY,
          }}
        >
          {t('featNews')}
        </Title>

        <Button
          type='text'
          className={`inline-flex! items-center! gap-3! rounded-full! pl-5! pr-1.5! py-1.5! h-auto! border! bg-transparent! ${isDark ? 'border-white/15! hover:bg-white/5!' : 'border-[#125484]/20! hover:bg-[#125484]/5!'}`}
          onClick={() => navigate(ROUTES.NEWS)}
        >
          <Title
            className='m-0!'
            level={4}
            style={{ color: isDark ? '#fff' : IES_NAVY }}
          >
            {t('viewAll')}
          </Title>
          <div
            className='w-8! h-8! rounded-full! flex! items-center! justify-center! shrink-0!'
            style={{ backgroundColor: IES_ORANGE }}
          >
            <RightOutlined className='text-white! text-xs!' />
          </div>
        </Button>
      </div>

      {/* hero story + latest headlines */}
      <div className='grid! grid-cols-1! lg:grid-cols-2! gap-10! lg:gap-14! mb-16!'>
        <div
          className='cursor-pointer!'
          onClick={() =>
            hdlNavigateNews({
              id: heroNews.id,
              authorN: heroNews.authorN,
              newsDate: heroNews.newsDate,
            })
          }
        >
          <img
            src={mb ? TSNMB : TSN}
            loading='lazy'
            alt={heroNews.newsTit}
            className='rounded-xl! w-full! h-auto!'
          />
          <Text
            color={IES_ORANGE}
            className='block! text-xs! font-bold! uppercase! tracking-wider! mt-4!'
          >
            {t('acadQA')}
          </Text>
          <Text
            className='block! text-2xl! font-bold! leading-snug! mt-1.5!'
            color={isDark ? 'white' : ''}
          >
            {t('profQuote')}
          </Text>
        </div>

        <div
          className='lg:border-l! lg:pl-10! flex! flex-col! h-full!'
          style={{ borderColor: isDark ? '#332f45' : '#e5e2ed' }}
        >
          {latestNews.map((item, index) => (
            <Suspense key={item.id} fallback={null}>
              <NewsHeadlineRow
                item={item}
                dark={isDark}
                divider={index !== 0}
                onClick={() =>
                  hdlNavigateNews({
                    id: item.id,
                    authorN: item.authorN,
                    newsDate: item.newsDate,
                  })
                }
              />
            </Suspense>
          ))}
        </div>
      </div>

      {/* upcoming events */}
      <div>
        <Title
          level={3}
          className='m-0! font-bold! mb-6!'
          style={{
            color: isDark ? '#fff' : IES_NAVY,
          }}
        >
          {t('evTit')}
        </Title>

        <div className='grid! grid-cols-1! md:grid-cols-1! lg:grid-cols-3! gap-8!'>
          {latestEv.map((item) => (
            <Suspense key={item.id} fallback={null}>
              <EventFeatureCard
                item={item}
                dark={isDark}
                locale={locale}
                onClick={() =>
                  hdlNavigateEvent({
                    id: item.id,
                    authorN: item.authorN,
                    evDate: item.evDate,
                  })
                }
              />
            </Suspense>
          ))}
        </div>
      </div>
    </IesClSection>
  );
};

export default NewAndEvent;
