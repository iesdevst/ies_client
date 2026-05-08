import { RightOutlined } from '@ant-design/icons';
import Breadcrumb from 'antd/es/breadcrumb';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import ContactKey from '../home/components/ContactKey';
import { useNewsData } from './hooks';
import { IesClSection, Text } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesNewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('iesNewsDetails');
  const { data } = useNewsData();

  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const detailDt = useMemo(() => {
    if (!id) return null;
    return data.find((item) => String(item.id) === id) || null;
  }, [data, id]);

  const breadcrumbItems = useMemo(
    () => [
      {
        title: (
          <PrefetchLink
            to={ROUTES.NEWS}
            style={{
              color: 'black',
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
          <Text color='#545969' className='!text-[16px] !font-bold'>
            {t('newsD')}
          </Text>
        ),
      },
    ],
    [t],
  );

  const paddingClass = mb ? '!px-4' : tl ? '!px-10' : '!px-20';

  const titleLv = mb || tl ? 3 : 1;

  if (!detailDt) {
    return;
  }
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
      <IesClSection
        layout='naiPage'
        tl={tl}
        id='newsec'
        newsTit={detailDt.newsTit}
        decs={detailDt.desc}
        img={detailDt.img}
        linkTo={detailDt.desc ? detailDt.linkTo : ''}
        paddingClass={paddingClass}
        titleLv={titleLv}
        nOe={t('news')}
        readOri={t('readOri')}
      />
      <ContactKey />
    </section>
  );
};

export default IesNewsDetails;
