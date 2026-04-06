import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb, Flex, Image } from 'antd';
import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useParams } from 'react-router-dom';
import ContactKey from '../home/components/ContactKey';
import { useNewsData } from './hooks';
import { Text, Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const IesNewsDetails = () => {
  const { id } = useParams();
  const { data } = useNewsData();
  const mb = useMediaQuery({ maxWidth: 767 });
  const tl = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const detailDt = useMemo(() => {
    if (!data || !id) return;
    return data.find((item) => String(item.id) === String(id));
  }, [data, id]);
  return (
    <section>
      <div className='!rounded-4xl !bg-[#dfe0e2] pt-10 py-20 mx-5'>
        <Breadcrumb
          className={`${mb ? '!ml-5 !mb-10' : tl ? '!ml-10 !mb-15' : '!ml-25 !py-15'}`}
          separator={<RightOutlined className='!text-black mx-6' />}
          items={[
            {
              title: (
                <PrefetchLink
                  to={ROUTES.NEWS}
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: '15px',
                  }}
                >
                  News Page
                </PrefetchLink>
              ),
            },
            {
              title: (
                <Text color='#545969' className='!text-[16px] !font-bold'>
                  News Details
                </Text>
              ),
            },
          ]}
        />
        <Title
          level={mb || tl ? 3 : 5}
          className='!text-center italic !text-black'
        >
          News
        </Title>
        {detailDt && (
          <section>
            <Flex
              vertical
              justify='center'
              align='center'
              className={`${mb ? '!px-4' : tl ? '!px-10' : '!px-20'}`}
              gap={40}
            >
              <Title
                level={mb || tl ? 3 : 1}
                className={`${mb || tl ? '!text-center' : ''} !text-black`}
              >
                {detailDt.newsTit}
              </Title>
              <Image src={detailDt.img} className='!rounded-2xl !w-full' />
              <Text
                className='!block !text-lg'
                style={{
                  whiteSpace: 'pre-line',
                }}
              >
                {detailDt.desc}
              </Text>
            </Flex>
          </section>
        )}
      </div>
      <ContactKey />
    </section>
  );
};

export default IesNewsDetails;
