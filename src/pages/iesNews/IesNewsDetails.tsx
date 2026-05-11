import { CiCircleFilled } from '@ant-design/icons';
import RightOutlined from '@ant-design/icons/RightOutlined';
import { Flex, List } from 'antd';
import Breadcrumb from 'antd/es/breadcrumb';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';

import ContactKey from '../home/components/ContactKey';
import { useEventLstData, useNewsData, useNewsLstData } from './hooks';
import { IesClSection, Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesNewsDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('iesNewsDetails');
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

  const paddingClass = mb || tl ? '' : '';

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
      {detailDt && latestNews && latestEv && (
        <IesClSection
          layout='naiPage'
          mb={mb}
          tl={tl}
          id='newsec'
          newsTit={detailDt.newsTit}
          decs={detailDt.desc}
          decs2={detailDt.decs2 ? detailDt.decs2 : ''}
          img={detailDt.img}
          imgBonus={detailDt.imgBonus ? detailDt.imgBonus : []}
          linkTo={detailDt.desc ? detailDt.linkTo : ''}
          paddingClass={paddingClass}
          titleLv={titleLv}
          nOe={t('news')}
          readOri={t('readOri')}
          recentNews={latestNews}
          recentEv={latestEv}
          children={
            <Flex vertical>
              <Title level={5} className='underline !text-blue-500'>
                Có thể bạn quan tâm
              </Title>
              <div className='space-y-5'>
                <div>
                  <Title level={4} className='uppercase'>
                    Thông tin liên hệ
                  </Title>
                  <Text className='!block !text-lg'>
                    Để học sinh và phụ huynh có thêm cơ hội trải nghiệm thực tế,
                    tham quan môi trường học tập và được tư vấn hướng nghiệp
                    trực tiếp, Trường Trung Cấp Tin Học Kinh Tế Sài Gòn mở cửa
                    đón tiếp từ thứ Hai đến thứ Sáu, 07g30 đến 17g00 tại Cơ sở
                    chính: 98 Phạm Văn Chiêu, Phường Thông Tây Hội , TP. Hồ Chí
                    Minh.
                  </Text>
                  <Text className='!block !text-lg'>
                    Thí sinh và phụ huynh có thể đăng ký trải nghiệm và tư vấn
                    qua:
                    <a
                      href='https://www.ies.edu.vn/demics-detail/infoTech?tab=register'
                      target='blank'
                      rel='noopener noreferrer'
                    >
                      <Text color='blue' className='!underline !text-lg !ml-1'>
                        https://www.ies.edu.vn/demics-detail/infoTech?tab=register
                      </Text>
                    </a>
                  </Text>
                </div>
                <div>
                  <Title level={4} className='uppercase'>
                    Phòng tuyển sinh Trường Trung Cấp Tin Học Kinh Tế Sài Gòn
                  </Title>
                  <List
                    dataSource={[
                      <Text>
                        <Text className='!font-bold !text-lg'>
                          Cơ sở chính:
                        </Text>
                        <Text className='ml-1 !text-lg'>
                          98 Phạm Văn Chiêu, Phường Thông Tây Hội , TP. Hồ Chí
                          Minh
                        </Text>
                      </Text>,
                      <Text>
                        <Text className='!font-bold !text-lg'>Hotline:</Text>
                        <a href='tel:0901309866' className='!text-lg !ml-1'>
                          0901.309.866
                        </a>
                      </Text>,
                      <Text>
                        <Text className='!font-bold !text-lg'>Zalo:</Text>
                        <a
                          href='https://zalo.me/0901309866'
                          target='_blank'
                          className='ml-1 !text-lg'
                        >
                          Trường Trung Cấp Tin Học Kinh Tế Sài Gòn
                        </a>
                      </Text>,
                      <Text>
                        <Text className='!font-bold !text-lg'>Fanpage:</Text>
                        <a
                          href='https://www.facebook.com/iescollege.edu.vn'
                          target='_blank'
                          className='ml-1 !text-lg'
                        >
                          IES College
                        </a>
                      </Text>,
                    ]}
                    renderItem={(item) => (
                      <div className='flex !items-center'>
                        <CiCircleFilled className='mr-2 text-[10px]' />
                        <List.Item className='!border-none !px-0 !py-1'>
                          {item}
                        </List.Item>
                      </div>
                    )}
                  />
                </div>
              </div>
            </Flex>
          }
        />
      )}
      <ContactKey />
    </section>
  );
};

export default IesNewsDetails;
