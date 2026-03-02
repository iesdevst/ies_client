import { Layout } from 'antd';
import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import FooterIes from './components/FooterIes';
import HeaderIes from './components/HeaderIes';
import styles from './iesClLayout.module.scss';

const { Content } = Layout;

const IesClientLayout: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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

        <HeaderIes />
        {/* Content Area */}
        <Content
          className='ant-layout-content'
          ref={contentRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            background: 'transparent',
            paddingBottom: 120,
          }}
        >
          <Outlet />
        </Content>

        <FooterIes />
      </Layout>
    </>
  );
};

export default IesClientLayout;
