import VerticalAlignTopOutlined from '@ant-design/icons/es/icons/VerticalAlignTopOutlined';
import BackTop from 'antd/es/back-top';
import Layout from 'antd/es/layout';
import React, { lazy, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FooterIes from './components/FooterIes';
import HeaderIes from './components/HeaderIes';
import RadialMenu from './components/RadialMenu';
import styles from './styles/iesClLayout.module.scss';
import ScrollToTop from '@/components/ScrollToTop';
import { ROUTES, type RoutePath } from '@/constants';
import { useUserStore } from '@/store';

const MegaDrawer = lazy(() => import('@/layouts/components/MegaDrawer'));

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
      <ScrollToTop />
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
        {presentLocation.pathname === ROUTES.PARTNERSHIP && showBackTop ? (
          <BackTop className='!rounded-full !z-500' duration={300}>
            <VerticalAlignTopOutlined style={{ fontSize: '22px' }} />
          </BackTop>
        ) : (
          // <div className='fixed right-5 bottom-24 z-50 rounded-xl shadow-lg bg-white px-1 pt-1.5'>
          <RadialMenu />
          // </div>
        )}
      </Layout>
      {drawerKey && (
        <MegaDrawer activeKey={drawerKey} onClose={() => setDrawerKey(null)} />
      )}
    </>
  );
};

export default IesClientLayout;
