import { ArrowUpOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Flex, List } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Text, Title } from '@/components';
import IesCtModal from '@/pages/home/components/IesCtModal';

const AbCoreValue: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('abCoreValue');
  const coreVals = [
    {
      title: t('val1'),
      desc: t('desc1'),
    },
    {
      title: t('val2'),
      desc: t('desc2'),
    },
    {
      title: t('val3'),
      desc: t('desc3'),
    },
    {
      title: t('val4'),
      desc: t('desc4'),
    },
    {
      title: t('val5'),
      desc: t('desc5'),
    },
    {
      title: t('val6'),
      desc: t('desc6'),
    },
  ];
  const [ctOpen, setCtOpen] = useState(false);

  return (
    <>
      <div
        className={`!bg-[#4B1B1B] rounded-3xl ${!mb ? 'px-35 mt-10 mb-25 mx-7 pt-20 pb-25' : 'mx-3 mt-10 pb-10'}`}
      >
        <Flex
          vertical={mb}
          className={`border-b border-[#EEB585] ${!mb ? ' !pb-8' : '!py-6'}`}
          justify='space-between'
          align='center'
          gap={!mb ? 0 : 10}
        >
          <Title level={!mb ? 1 : 3} className='!text-[#EEB585] !m-0'>
            {t('title')}
          </Title>

          <div>
            <Button
              size={!mb ? 'large' : 'small'}
              type='default'
              className={`!bg-[#EEB585] !text-black !font-bold hover:!bg-[#916a4a] hover:!text-white ${!mb ? '!px-8 !py-6 !text-lg' : '!px-4 !py-4'}`}
              onClick={() => setCtOpen(true)}
            >
              {t('contactBtn')}

              <ArrowUpOutlined className='rotate-45 !font-bold' />
            </Button>
          </div>
        </Flex>

        <List
          dataSource={coreVals}
          renderItem={(item) => (
            <List.Item className={`${!mb ? '!border-none !px-0' : '!px-3'}`}>
              <Flex align='flex-start' gap={!mb ? 10 : 6}>
                <CheckCircleOutlined className='!text-[#f5cfa8] !mt-2' />

                <div>
                  <Title className='!text-[#f5cfa8] uppercase' level={4}>
                    {item.title}
                  </Title>

                  <Text
                    className={`!block !text-white ${!mb ? 'pr-10' : 'pr-3'} !text-xs md:!text-2xl lg:!text-2xl`}
                  >
                    {item.desc}
                  </Text>
                </div>
              </Flex>
            </List.Item>
          )}
          className={`${!mb ? '!mt-10' : '!mt-3'}`}
        />
      </div>
      <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
    </>
  );
};

export default AbCoreValue;
