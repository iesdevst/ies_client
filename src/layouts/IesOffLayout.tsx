import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import Button from 'antd/es/button';
import Drawer from 'antd/es/drawer';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import OffSidebar from './components/OffSidebar';
import { useDevice } from '@/hooks';
import ContactKey from '@/pages/home/components/ContactKey';
import { useUserStore } from '@/store';

const SIDEBAR_W = 280;

const IesOffLayout = () => {
  const { isDesktop, isTabletPro } = useDevice();
  const isLarge = isDesktop || isTabletPro;
  const { isDark } = useUserStore();
  const [sideOpen, setSideOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className='min-h-screen'>
      <div className='flex'>
        <AnimatePresence initial={false}>
          {isLarge && sideOpen && (
            <motion.aside
              key='off-sidebar'
              initial={{ width: 0 }}
              animate={{ width: SIDEBAR_W }}
              exit={{ width: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className='shrink-0 overflow-hidden h-screen sticky top-0'
            >
              <div style={{ width: SIDEBAR_W }} className='h-full'>
                <OffSidebar />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <main className='flex-1 min-w-0'>
          <div
            className='sticky top-0 z-40 flex items-center px-3 py-2 border-b'
            style={{
              background: isDark
                ? 'linear-gradient(180deg,#1e3a8a 0%,#0f172a 50%,#050505 100%)'
                : 'linear-gradient(135deg, #0EA5C8 0%, #1E4D8C 100%)',
            }}
          >
            <Button
              type='text'
              icon={
                isLarge ? (
                  sideOpen ? (
                    <MenuFoldOutlined />
                  ) : (
                    <MenuUnfoldOutlined />
                  )
                ) : (
                  <MenuOutlined />
                )
              }
              onClick={() =>
                isLarge ? setSideOpen((v) => !v) : setDrawerOpen(true)
              }
            />
          </div>

          {/* height = viewport minus the topbar above — pages use h-full */}
          <div className='h-[calc(100svh-48px)] overflow-hidden'>
            <Outlet />
          </div>
        </main>
      </div>

      {!isLarge && (
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          placement='left'
          width={SIDEBAR_W}
          styles={{ body: { padding: 0 } }}
          title={null}
          closable
        >
          <OffSidebar onNavigate={() => setDrawerOpen(false)} />
        </Drawer>
      )}

      <ContactKey />
    </section>
  );
};

export default IesOffLayout;
