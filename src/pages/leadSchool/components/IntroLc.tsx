import Col from 'antd/es/col';
import Flex from 'antd/es/flex';
import Row from 'antd/es/row';
import { useTranslation } from 'react-i18next';
import ILC1 from '@/assets/imgs/intro_bgh_1.webp';
import ILC2 from '@/assets/imgs/intro_bgh_2.webp';
import LGD from '@/assets/imgs/intro_lc_lg_dark.webp';
import { IesClSection, Title } from '@/components';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const IntroLc = () => {
  const { isDark } = useUserStore();
  const { device } = useDevice();
  const { t } = useTranslation('introLc');

  const dk = device === 'desktop';
  return (
    <IesClSection
      id='introlc'
      layout='simple'
      divider={false}
      children={
        <div className='space-y-10'>
          <Title
            level={5}
            className={`!text-center ${isDark ? '!text-[#9fe7f9]' : '!text-[#696c6e]'}`}
          >
            {t('met')}
          </Title>
          <Flex justify='center' align='center'>
            <Title
              className={`${dk ? 'max-w-xl' : ''} !m-0 !text-center !font-bold !mb-15`}
            >
              {t('ourvisi')}
            </Title>
          </Flex>

          <div>
            <Row align='middle'>
              <Col xs={24} md={12} className='pr-10'>
                <img
                  src={ILC1}
                  alt='ilc1'
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
              </Col>

              <Col xs={24} md={12} className='pl-10'>
                <img
                  src={ILC2}
                  alt='ilc2'
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
              </Col>
            </Row>
          </div>

          <Flex
            justify='center'
            align='center'
            className='!bg-[#1c4669] !rounded-xl !py-1.5'
          >
            <img src={LGD} alt='lclg' />
          </Flex>
        </div>
      }
      className='py-10 px-8'
    />
  );
};

export default IntroLc;
