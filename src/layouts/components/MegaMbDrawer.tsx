import {
  ArrowUpOutlined,
  CloseOutlined,
  MenuOutlined,
  RightOutlined,
} from '@ant-design/icons';
import {
  Button,
  Collapse,
  Drawer,
  Flex,
  Image,
  Row,
  type CollapseProps,
} from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMegaNavData } from '../hooks';
import styles from '../styles/iesDrawerMb.module.scss';
import IES_HOZI_DARK_LOGO_URL from '@/assets/imgs/ies_logo_horizo_dark.png';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_hoziro.png';
import MNL from '@/assets/imgs/ies_logo_notext.png';
import { ThemeSwitcher, Title } from '@/components';
import IesClientLang from '@/components/Buttons/IesClientLang';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, type RoutePath } from '@/constants';
import { useUserStore } from '@/store';

const MegaMbDrawer: React.FC = () => {
  const { data } = useMegaNavData();
  const { isDark } = useUserStore();
  const { t } = useTranslation('megaMbDrawer');
  const navigate = useNavigate();
  const [mbDrawerOpen, setMbDrawerOpen] = useState(false);
  const [actClKey, setActClKey] = useState<RoutePath | Array<RoutePath>>();

  // menu collaspe

  const items: CollapseProps['items'] = data.map((navI) => {
    const isAct = Array.isArray(actClKey)
      ? actClKey.includes(navI.key)
      : actClKey === navI.key;
    return {
      key: navI.key,
      label: (
        <Title
          level={5}
          className={`
  !m-0 uppercase
  ${isAct ? '!text-blue-500' : isDark ? '!text-white' : '!text-black'}
`}
        >
          {navI.label}
        </Title>
      ),
      children: (
        <div>
          <Button
            className='!bg-transparent !p-0 mb-2.5'
            type='text'
            size='small'
            onClick={() => {
              if (!navI.key) return;
              setMbDrawerOpen(false);
              navigate(navI.key);
            }}
          >
            <Title
              className={`${isDark ? '!text-white' : '!text-black'} !m-0 !mr-2`}
              level={5}
            >
              {t('ovw')}
            </Title>
            <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-2'>
              <RightOutlined className='!text-white !font-semibold !text-xs' />
            </div>
          </Button>
          <div
            className={`space-y-8 py-4 pl-2.5 !rounded-xl ${isDark ? '!bg-[#212223]' : '!bg-white'}`}
          >
            {navI.sections.map((sec, i) => (
              <div key={i}>
                {sec.title && (
                  <Row
                    justify='start'
                    align='middle'
                    className='gap-x-3 !mb-2.5'
                  >
                    <Image src={MNL} preview={false} className='!w-8 !h-8' />

                    <Title
                      level={5}
                      className={`${isDark ? '!text-blue-500' : '!text-[#797a97]'} uppercase !m-0`}
                    >
                      {sec.title}
                    </Title>
                  </Row>
                )}

                <Flex vertical className='!gap-y-1.5'>
                  {sec.links.map((link) => (
                    <PrefetchLink
                      key={link.route}
                      to={link.route}
                      onClick={() => setMbDrawerOpen(false)}
                      className={`${isDark ? '!text-white' : '!text-black'} hover:!underline !font-bold`}
                      style={{
                        fontSize: '0.8rem',
                        fontFamily: "'IBM Plex Sans', sans-serif",
                      }}
                    >
                      {link.label}
                    </PrefetchLink>
                  ))}
                </Flex>
              </div>
            ))}
          </div>
        </div>
      ),
    };
  });

  return (
    <>
      <Button
        type='text'
        size='large'
        icon={<MenuOutlined />}
        onClick={() => setMbDrawerOpen(true)}
        className={`${isDark ? '!text-white' : '!text-black'} !font-semibold`}
      />

      <Drawer
        placement='right'
        onClose={() => setMbDrawerOpen(false)}
        closable={false}
        open={mbDrawerOpen}
        className={`${isDark ? '!bg-[#212223]' : '!bg-white'} ${styles.mbDrawer}`}
      >
        <div className='px-3 py-2.5'>
          <Flex justify='space-between' align='center'>
            <PrefetchLink
              to={ROUTES.DASHBOARD}
              onClick={() => setMbDrawerOpen(false)}
              className='!block !flex !items-center !pr-28'
            >
              <Image
                src={!isDark ? IES_LOGO_MB : IES_HOZI_DARK_LOGO_URL}
                alt='ies_logo'
                preview={false}
              />
            </PrefetchLink>

            <Button
              type='text'
              size='small'
              className='!bg-black !text-white'
              onClick={() => setMbDrawerOpen(false)}
            >
              <CloseOutlined />
            </Button>
          </Flex>
          <Row justify={'space-between'} align={'middle'} className='mt-2 mx-5'>
            <IesClientLang
              buttonProps={{ className: '!p-0 !border-none !bg-transparent' }}
              colorT={isDark ? '!text-white' : ''}
            />
            <ThemeSwitcher classN={`${!isDark ? '!text-[#212223]' : ''}`} />
          </Row>
        </div>

        <Flex vertical className='!bg-[#354694] !pb-3'>
          <Title
            level={5}
            className='!text-center !m-0 !my-3 !text-white !font-bold'
          >
            {t('iesCl')}
          </Title>
          <Button type='text' className='!block !text-start' disabled>
            <PrefetchLink
              to={ROUTES.ROOT}
              className='!text-white py-1.5 !text-sm '
            >
              {t('iesStu')} <ArrowUpOutlined className='rotate-45' />
            </PrefetchLink>
          </Button>

          <Button type='text' className='!block !text-start' disabled>
            <PrefetchLink
              to={ROUTES.ROOT}
              className='!text-white !text-sm py-1.5'
            >
              {t('iesStaff')} <ArrowUpOutlined className='rotate-45' />
            </PrefetchLink>
          </Button>
        </Flex>

        <Collapse
          items={items}
          accordion
          expandIconPosition='end'
          activeKey={actClKey}
          onChange={(key) => setActClKey(key)}
          className={`!border-none  ${styles.mbMegaCollapse}`}
        />
      </Drawer>
    </>
  );
};

export default MegaMbDrawer;
