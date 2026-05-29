import CloseOutlined from '@ant-design/icons/CloseOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import Button from 'antd/es/button';
import Drawer from 'antd/es/drawer';
import Flex from 'antd/es/flex';
import Row from 'antd/es/row';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMegaNavData } from '../hooks';
import MNL from '@/assets/imgs/ies_logo_notext.webp';
import { Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import type { RoutePath } from '@/constants';
import { useUserStore } from '@/store';

interface IMegaDrawer {
  activeKey: RoutePath | null;
  onClose: () => void;
}

/* =========================
   Memoized Link Item
========================= */
const MegaLink = React.memo(
  ({
    link,
    onClick,
    isDark,
  }: {
    link: { route: string; label: string };
    onClick: () => void;
    isDark: boolean;
  }) => {
    return (
      <PrefetchLink
        to={link.route}
        onClick={onClick}
        className={`hover:!underline ${isDark ? '!text-white' : '!text-black'}`}
        style={{
          fontWeight: 550,
          fontSize: '1.1rem',
          fontFamily: "'IBM Plex Sans', sans-serif",
        }}
      >
        {link.label}
      </PrefetchLink>
    );
  },
);

MegaLink.displayName = 'MegaLink';

/* =========================
   Main Component
========================= */
const MegaDrawer: React.FC<IMegaDrawer> = ({ activeKey, onClose }) => {
  const [drClose, setDrClose] = useState(false);
  const { data } = useMegaNavData();
  const navigate = useNavigate();
  const { isDark } = useUserStore();
  const { t } = useTranslation('megaDrawer');

  /* =========================
     Map lookup O(1)
  ========================= */
  const menuMap = useMemo(() => {
    return Object.fromEntries(data.map((item) => [item.key, item]));
  }, [data]);

  const activeMenu = activeKey ? menuMap[activeKey] : null;

  /* =========================
     Memo styles
  ========================= */
  const bgGradient = useMemo(() => {
    return isDark
      ? `linear-gradient(
          to right,
          rgba(33,34,35,0) 0%,
          rgba(33,34,35,0.2) 40%,
          rgba(33,34,35,0.6) 70%,
          #212223 100%
        )`
      : `linear-gradient(
          to right,
          rgba(255,255,255,0) 0%,
          rgba(255,255,255,0.2) 40%,
          rgba(255,255,255,0.6) 70%,
          white 100%
        )`;
  }, [isDark]);

  const drawerStyles = useMemo(
    () => ({
      body: { padding: 0 },
      content: { background: 'transparent', boxShadow: 'none' },
    }),
    [],
  );

  /* =========================
     Handlers
  ========================= */
  const drawerCloseHd = useCallback(() => {
    setDrClose(false);
    onClose();
  }, [onClose]);

  const handleNavigate = useCallback(() => {
    if (!activeMenu) return;
    drawerCloseHd();
    navigate(activeMenu.key);
  }, [activeMenu, navigate, drawerCloseHd]);

  if (!activeKey || !activeMenu) return null;

  return (
    <Drawer
      placement='top'
      open
      onClose={drawerCloseHd}
      height='100%'
      width='100%'
      closable={false}
      mask
      zIndex={999}
      styles={drawerStyles}
      destroyOnHidden
      forceRender={false}
    >
      <div
        className={`flex h-full w-full mega-menu-content ${
          drClose ? 'mega-menu-hide' : ''
        }`}
      >
        {/* LEFT BACKGROUND */}
        <div
          className='!w-2/5 h-full'
          style={{
            backdropFilter: 'blur(2px)',
            background: bgGradient,
          }}
        />

        {/* RIGHT CONTENT */}
        <div
          className='!w-3/5 px-10 pt-4 overflow-y-auto'
          style={{
            background: isDark ? '#212223' : '#ffffff',
          }}
        >
          {/* HEADER */}
          <Flex
            justify='space-between'
            align='center'
            className={`${
              !activeMenu.overW ? 'border-b !pb-8 border-[#e2e4e9]' : ''
            }`}
          >
            <Title
              className={`!font-semibold !m-0 !text-5xl ${
                isDark ? '!text-white' : '!text-black'
              }`}
            >
              {activeMenu.label}
            </Title>

            <Button
              type='text'
              size='large'
              className='!bg-black !text-white'
              onClick={drawerCloseHd}
            >
              <CloseOutlined />
            </Button>
          </Flex>

          {/* OVERVIEW BUTTON */}
          {activeMenu.overW && (
            <div className='mt-6 border-b border-[#e2e4e9] pb-11'>
              <Button
                className='!bg-transparent !p-0'
                type='text'
                onClick={handleNavigate}
              >
                <Title
                  className={`!m-0 !mr-2 uppercase ${
                    isDark ? '!text-white' : '!text-black'
                  }`}
                  level={4}
                >
                  {t('ovw')}
                </Title>
                <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                  <RightOutlined className='!text-white !font-semibold' />
                </div>
              </Button>
            </div>
          )}

          {/* SECTIONS */}
          <div className='space-y-8 mt-8'>
            {activeMenu.sections.map((section) => (
              <div key={section.title}>
                {section.title && (
                  <Row
                    justify='start'
                    align='middle'
                    className='gap-x-3 !mb-2.5'
                  >
                    <img
                      src={MNL}
                      alt='icon'
                      className='w-10 h-10'
                      loading='lazy'
                    />

                    <Title
                      level={3}
                      className={`${
                        isDark ? '!text-blue-500' : '!text-[#797a97]'
                      } uppercase !m-0`}
                    >
                      {section.title}
                    </Title>
                  </Row>
                )}

                <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                  {section.links.map((link) => (
                    <MegaLink
                      key={link.route}
                      link={link}
                      onClick={drawerCloseHd}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default memo(MegaDrawer);
