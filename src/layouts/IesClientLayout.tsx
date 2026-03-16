import { Layout } from 'antd';
import React, { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import FooterIes from './components/FooterIes';
import HeaderIes from './components/HeaderIes';
import MegaDrawer from './components/MegaDrawer';
import styles from './styles/iesClLayout.module.scss';
import { PageContainer } from '@/components';
import type { RoutePath } from '@/constants';

const { Content } = Layout;

const IesClientLayout: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [drawerKey, setDrawerKey] = useState<RoutePath | null>(null);

  return (
    <>
      <div
        className={`${styles['iesBackground']}`}
        style={{ zIndex: -1, pointerEvents: 'none' }}
      />

      <Layout
        style={{
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        {/* Header */}

        <HeaderIes setDrawerKey={setDrawerKey} />
        {/* Content Area */}
        <PageContainer>
          <Content
            className='ant-layout-content'
            ref={contentRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              background: 'transparent',
            }}
          >
            <Outlet />
          </Content>
        </PageContainer>

        <FooterIes />
      </Layout>
      <MegaDrawer activeKey={drawerKey} onClose={() => setDrawerKey(null)} />
    </>
  );
};

export default IesClientLayout;
