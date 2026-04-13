import { VerticalAlignTopOutlined } from '@ant-design/icons';
import { BackTop, Layout } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FooterIes from './components/FooterIes';
import HeaderIes from './components/HeaderIes';
import MegaDrawer from './components/MegaDrawer';
import styles from './styles/iesClLayout.module.scss';
import { ROUTES, type RoutePath } from '@/constants';
import { useUserStore } from '@/store';

const { Content } = Layout;

const IesClientLayout: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [drawerKey, setDrawerKey] = useState<RoutePath | null>(null);
  const presentLocation = useLocation();
  const [showBackTop, setShowBackTop] = useState(false);
  const { isDark } = useUserStore();

  useEffect(() => {
    const hdlScroll = () => {
      setShowBackTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', hdlScroll);
    return () => window.removeEventListener('scroll', hdlScroll);
  }, []);

  return (
    <>
      <div
        className={`${styles['iesBackground']}`}
        style={{ zIndex: -1, pointerEvents: 'none' }}
      />

      <Layout
        style={{
          background: isDark ? '#212223' : 'white',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Header */}

        <HeaderIes setDrawerKey={setDrawerKey} />
        {/* Content Area */}

        <Content
          ref={contentRef}
          style={{
            flex: '1',
            background: 'transparent',
          }}
        >
          <Outlet />
        </Content>

        <FooterIes />
        {presentLocation.pathname === ROUTES.PARTNERSHIP && showBackTop && (
          <BackTop className='!rounded-full !z-500' duration={300}>
            <VerticalAlignTopOutlined style={{ fontSize: '22px' }} />
          </BackTop>
        )}
      </Layout>
      <MegaDrawer activeKey={drawerKey} onClose={() => setDrawerKey(null)} />
    </>
  );
};

export default IesClientLayout;
