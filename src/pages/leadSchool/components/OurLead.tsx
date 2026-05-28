import UserOutlined from '@ant-design/icons/UserOutlined';
import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Row from 'antd/es/row';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HP from '@/assets/imgs/hp_ava.webp';
import HT from '@/assets/imgs/ht_ava.webp';
import { IesClSection, Text, Title } from '@/components';

const OurLead = () => {
  const { t } = useTranslation('ourLead');

  const leaders = useMemo(
    () => [
      {
        id: '1',
        name: t('dqh'),
        role: t('pri'),
        image: HT,
        quote: t('quote1'),
      },
      {
        id: '2',
        name: t('lnt'),
        role: t('vicepri'),
        image: HP,
        quote: t('quote2'),
      },
    ],
    [t],
  );
  const [leadId, setLeadId] = useState('1');

  const selected = leaders.find((item) => item.id === leadId) ?? leaders[0];

  return (
    <IesClSection
      id='ourlead'
      layout='simple'
      divider={false}
      children={
        <div className='!space-y-20'>
          <Flex>
            <Text color='white' className='!block !flex-4'>
              <UserOutlined className='!text-[#44a0fd] mr-1' /> {t('ourLead')}
            </Text>
            <Title level={2} className='!m-0 !flex-5 !text-white'>
              {t('getTo')}{' '}
              <span className='!text-[#44a0fd]'>{t('vision')}</span>{' '}
              {t('passion')}{' '}
              <span className='!text-[#44a0fd]'>{t('purpose')}</span>.
            </Title>
          </Flex>

          <Flex justify='space-between' align='flex-start' className=''>
            <Row>
              <Col className='!space-y-20'>
                {leaders.map((item) => (
                  <motion.div
                    key={item.name}
                    onClick={() => setLeadId(item.id)}
                    className='cursor-pointer'
                    animate={{
                      opacity: leadId === item.id ? 1 : 0.5,
                      x: leadId === item.id ? 10 : 0,
                    }}
                    whileHover={{
                      scale: 1.02,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 120,
                    }}
                  >
                    <Title
                      level={2}
                      className={`!cursor-pointer !text-white border-l-2 transition-all ${
                        leadId === item.id
                          ? 'border-white pl-4'
                          : 'border-transparent'
                      }`}
                    >
                      {item.name}
                    </Title>

                    <Text color='white' className='!block !text-lg'>
                      {item.role}
                    </Text>
                  </motion.div>
                ))}
              </Col>
            </Row>
            <Flex vertical align='center' gap={15}>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <img
                    src={selected.image}
                    alt={selected.id}
                    className='!rounded-2xl'
                  />
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text color='white' className='!block !text-lg'>
                    {selected.quote}
                  </Text>
                </motion.div>
              </AnimatePresence>
            </Flex>
          </Flex>
        </div>
      }
      className='px-30 bg-black py-15'
    />
  );
};

export default OurLead;
