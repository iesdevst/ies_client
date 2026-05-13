import HomeFilled from '@ant-design/icons/HomeFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';
import Breadcrumb from 'antd/es/breadcrumb';
import Card from 'antd/es/card';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Image from 'antd/es/image';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import type { EventLstData } from '../hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';
import { useUserStore } from '@/store';

interface IEvsLst {
  evLstData: Array<EventLstData>;
}

const EvsLst: React.FC<IEvsLst> = (props) => {
  const { evLstData } = props;
  const { t } = useTranslation('iesEvents');

  const mb = useMediaQuery({ maxWidth: 767 });
  const { isDark } = useUserStore();
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`${ROUTES.EVENTS_DETAILS}/${id}`);
  };

  if (!evLstData) return;

  return (
    <section>
      <Breadcrumb
        className={`${!mb ? '' : '!ml-5 !py-6'}`}
        separator={
          <RightOutlined
            className={`${isDark ? '!text-white' : '!text-black'} px-6`}
          />
        }
        items={[
          {
            title: (
              <PrefetchLink
                to={ROUTES.DASHBOARD}
                style={{
                  color: isDark ? 'white' : 'black',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                <HomeFilled className='!mb-3 !text-xl' />
              </PrefetchLink>
            ),
          },
          {
            title: (
              <Text
                color={isDark ? '#74abf9' : '#545969'}
                className='!text-[16px] !font-bold'
              >
                {t('events')}
              </Text>
            ),
          },
        ]}
      />

      <Title level={!mb ? 5 : 3} className='!text-center'>
        Hiển thị {evLstData.length} kết quả tìm kiếm
      </Title>
      <Flex vertical className='!space-y-10 !w-full !pt-3'>
        {evLstData.map((evLst) => (
          <Card
            key={evLst.id}
            className={`${!mb ? '!py-5 !px-10' : '!p-5 !mx-3'} !bg-gray-400 cursor-pointer`}
            onClick={() => handleNavigate(evLst.id)}
          >
            <Flex
              justify='flex-start'
              align='center'
              gap={!mb ? 100 : 30}
              vertical={mb}
            >
              <Image
                src={evLst.img}
                preview={false}
                className='!w-100 !h-60 !rounded-xl'
                loading='lazy'
                alt='iesev'
              />
              <Col>
                <Title
                  level={4}
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {evLst.eventTit}
                </Title>
                <Text
                  className='!block !text-lg'
                  style={{
                    whiteSpace: 'pre-line',
                  }}
                >
                  {evLst.desc}
                </Text>
              </Col>
            </Flex>
          </Card>
        ))}
      </Flex>
    </section>
  );
};

export default EvsLst;
