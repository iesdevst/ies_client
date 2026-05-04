import { CheckCircleFilled } from '@ant-design/icons';
import { Button, Col, Flex, Image, List } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import PC from '@/assets/imgs/partnership_contact.jpeg';
import { IesClSection, Text, Title } from '@/components';

interface IPartnershipRegis {
  openRegisInSec: () => void;
}

const PartnershipRegis: React.FC<IPartnershipRegis> = (props) => {
  const { openRegisInSec } = props;
  const { t } = useTranslation('partnershipRegis');
  const mb = useMediaQuery({ maxWidth: 1024 });
  const steps = useMemo(
    () => [t('rs1'), t('rs2'), t('rs3'), t('rs4'), t('rs5')],
    [t],
  );
  return (
    <IesClSection
      id='partnership-regis'
      layout='simple'
      divider={false}
      children={
        <section className={`${!mb ? 'pb-30' : 'pb-10 px-5'}`}>
          <Flex
            vertical={mb}
            align='flex-start'
            className={`${!mb ? '!px-40' : ''}`}
            gap={15}
          >
            <Col
              className={`bg-gradient-to-br from-[#1f1b2e] to-[#4f46e5] rounded-2xl  !space-y-6 ${!mb ? 'flex-2 pl-10 pt-6.5' : 'py-10 px-4'}`}
            >
              <div>
                <Title level={!mb ? 2 : 3} className='!m-0 !text-white'>
                  {t('rt1')}
                </Title>
                <Title level={2} className='!m-0 !text-white'>
                  {t('rt2')}
                </Title>
              </div>
              <List
                bordered={false}
                dataSource={steps}
                renderItem={(item) => (
                  <List.Item style={{ border: 'none', padding: '4px 0' }}>
                    <Flex align='center' gap={8} className='!mb-2'>
                      <CheckCircleFilled className='!text-white' />
                      <Text color='white' className='!text-lg !block'>
                        {item}
                      </Text>
                    </Flex>
                  </List.Item>
                )}
              />
              <Title level={!mb ? 1 : 4} className='!text-white'>
                {t('rst')}
              </Title>
            </Col>
            <Col
              className={`bg-gradient-to-br from-[#1f1b2e] to-[#4f46e5] rounded-2xl py-5 px-3 ${!mb ? 'flex-1' : ''}`}
            >
              <Title
                level={2}
                className={`!text-white !m-0 ${!mb ? '' : '!text-center'}`}
              >
                {t('ra')}
              </Title>

              <Image
                src={PC}
                preview={false}
                className={`!mt-2 !mb-1 !rounded-4xl ${!mb ? '' : 'p-5'}`}
                loading='lazy'
              />
              <Button
                type='default'
                className={`!w-full !bg-gray-500 !border-none !rounded-2xl !font-bold !text-lg hover:!text-[#16265a] ${!mb ? '' : '!py-6'}`}
                onClick={openRegisInSec}
              >
                {t('rc')}
              </Button>
            </Col>
          </Flex>
        </section>
      }
    />
  );
};

export default PartnershipRegis;
