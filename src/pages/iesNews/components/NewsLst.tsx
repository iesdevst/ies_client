import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import type { NewsLstData } from '../hooks';
import { Text, Title } from '@/components';
import { ROUTES } from '@/constants';

interface INewsLst {
  newsLstdata: Array<NewsLstData>;
}

const NewsLst: React.FC<INewsLst> = (props) => {
  const { newsLstdata } = props;
  const mb = useMediaQuery({ maxWidth: 767 });
  const { t } = useTranslation('iesNews');
  // const { isDark } = useUserStore();

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`${ROUTES.NEWS_DETAILS}/${id}`);
  };

  // const breadcrumbClass = mb ? "!ml-5 !py-6" : "!ml-25 !py-15";

  if (!newsLstdata) return;

  return (
    <section>
      {/* <Breadcrumb
        className={breadcrumbClass}
        separator={
          <RightOutlined
            className={`${isDark ? "!text-white" : "!text-black"} px-6`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: isDark ? "white" : "black",
                  fontWeight: 700,
                  fontSize: "15px",
                }}
              >
                <HomeFilled className="!mb-3 !text-xl" />
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text
                color={isDark ? "#74abf9" : "#545969"}
                className="!text-[16px] !font-bold"
              >
                {t("news")}
              </Text>
            ),
          },
        ]}
      /> */}

      <Title level={!mb ? 5 : 3} className='!text-center'>
        {t('cta')} {t('news')}
      </Title>
      <Flex vertical className='!space-y-10 !w-full !py-10'>
        {newsLstdata.map((newsLst) => (
          <Card
            key={newsLst.id}
            className={`${!mb ? '!w-5/6 !ml-15 !py-5 !px-10' : '!p-5 !mx-3'} !bg-gray-400 cursor-pointer`}
            onClick={() => handleNavigate(newsLst.id)}
          >
            <Flex
              justify='flex-start'
              align='center'
              gap={!mb ? 100 : 30}
              vertical={mb}
            >
              <Image
                src={newsLst.img}
                preview={false}
                className='!w-100 !h-60 !rounded-xl'
                loading='lazy'
                alt='iesnew'
              />
              <Col>
                <Title
                  level={4}
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {newsLst.newsTit}
                </Title>
                <Text
                  className='!block !text-lg'
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {newsLst.desc}
                </Text>
              </Col>
            </Flex>
          </Card>
        ))}
      </Flex>
    </section>
  );
};

export default NewsLst;
