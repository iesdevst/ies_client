import { CloseOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex, Image, Row } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMegaNavData } from '../hooks';
import MNL from '@/assets/imgs/ies_logo_notext.png';
import { Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';
import type { RoutePath } from '@/constants';

interface IMegaDrawer {
  activeKey: RoutePath | null;
  onClose: () => void;
}

const MegaDrawer: React.FC<IMegaDrawer> = (props) => {
  const { activeKey, onClose } = props;
  const [drClose, setDrClose] = useState(false);
  const { data } = useMegaNavData();
  const navigate = useNavigate();

  const activeMenu = data.find((item) => item.key === activeKey);

  const drawerCloseHd = () => {
    setDrClose(false);
    onClose();
  };

  return (
    <Drawer
      placement='top'
      open={!!activeKey}
      onClose={drawerCloseHd}
      height='100%'
      width='100%'
      closable={false}
      mask
      zIndex={9999}
      styles={{
        body: { padding: 0 },
        content: { background: 'transparent', boxShadow: 'none' },
      }}
    >
      <div
        className={`flex h-full w-full mega-menu-content ${
          drClose ? 'mega-menu-hide' : ''
        }`}
      >
        {/* LEFT BACKGROUND PANEL */}
        <div
          className='!w-2/5 h-full'
          style={{
            backdropFilter: 'blur(4px)',
            // WebkitBackdropFilter: 'blur(2px)',
            background: `
      linear-gradient(
        to right,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0) 20%,
        rgba(255,255,255,0.1) 35%,
        rgba(255,255,255,0.25) 50%,
        rgba(255,255,255,0.5) 65%,
        rgba(255,255,255,0.8) 80%,
        rgba(255,255,255,0.95) 92%,
        white 100%
      )
    `,
          }}
        ></div>

        {/* RIGHT MENU CONTENT */}
        <div
          className='!w-3/5 px-10 pt-4 overflow-y-auto'
          style={{
            background: '#ffffff',
          }}
        >
          {activeMenu && (
            <>
              <Flex
                justify='space-between'
                align='center'
                className={`${!activeMenu.overW ? 'border-b !pb-8 border-[#e2e4e9]' : ''}`}
              >
                <Title className='!font-semibold !m-0 !text-5xl' level={1}>
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

              {activeMenu.overW && (
                <div className='mt-6 border-b border-[#e2e4e9] pb-11'>
                  <Button
                    className='!bg-transparent !p-0'
                    type='text'
                    onClick={() => {
                      if (!activeMenu) return;
                      drawerCloseHd();
                      navigate(activeMenu.key);
                    }}
                  >
                    <Title
                      className='!m-0 !text-black !mr-2 uppercase'
                      level={4}
                    >
                      Overview
                    </Title>
                    <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                      <RightOutlined className='!text-white !font-semibold ' />
                    </div>
                  </Button>
                </div>
              )}

              <div className='space-y-8 mt-8'>
                {activeMenu.sections.map((section) => (
                  <div key={section.title}>
                    {section.title && (
                      <Row
                        justify={'start'}
                        align={'middle'}
                        className='gap-x-3 !mb-2.5'
                      >
                        <Image
                          src={MNL}
                          preview={false}
                          className='!w-10 !h-10'
                        />
                        <Title
                          level={3}
                          className='uppercase !text-[#797a97] !m-0'
                        >
                          {section.title}
                        </Title>
                      </Row>
                    )}

                    <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                      {section.links.map((link) => (
                        <PrefetchLink
                          key={link.route}
                          to={link.route}
                          onClick={drawerCloseHd}
                          className='!text-black hover:!underline'
                          style={{
                            fontWeight: 550,
                            fontSize: '1.1rem',
                            fontFamily: "'IBM Plex Sans', sans-serif",
                          }}
                        >
                          {link.label}
                        </PrefetchLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default MegaDrawer;
