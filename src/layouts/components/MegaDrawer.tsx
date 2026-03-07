import { RightOutlined } from '@ant-design/icons';
import { Button, Drawer, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useMegaNavData } from '../hooks';
import { Title } from '@/components';
import { PrefetchLink } from '@/components/PrefetchLink';

interface IMegaDrawer {
  activeKey: string | null;
  onClose: () => void;
}

const MegaDrawer: React.FC<IMegaDrawer> = (props) => {
  const { activeKey, onClose } = props;
  const data = useMegaNavData();
  const navigate = useNavigate();

  const activeMenu = data.find((item) => item.key === activeKey);

  return (
    <Drawer
      placement='top'
      open={!!activeKey}
      onClose={onClose}
      height={'100%'}
      closable={false}
      mask={true}
      style={{ position: 'absolute', top: 0, right: 0 }}
      className='!bg-white !w-2/3 !p-0'
      title={
        <>
          <Flex justify='space-between' align='center'>
            <Title className='!font-semibold !m-0 !text-5xl' level={1}>
              {activeMenu?.label}
            </Title>

            <Button
              type='text'
              size='large'
              className=' !bg-black'
              onClick={onClose}
            >
              ✕
            </Button>
          </Flex>
          <div className='mt-6 !border-b !border-[#e2e4e9] pb-11'>
            <Button
              className='!bg-transparent !p-0'
              type='text'
              onClick={() => {
                if (!activeMenu) return;
                onClose();
                navigate(activeMenu.key);
              }}
            >
              <Title className='!m-0 !text-black !mr-2 uppercase' level={4}>
                Overview
              </Title>
              <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-3'>
                <RightOutlined className='!text-white !font-semibold ' />
              </div>
            </Button>
          </div>
        </>
      }
    >
      {activeMenu && (
        <div>
          <div className='space-y-8'>
            {activeMenu.sections.map((section) => (
              <div key={section.title}>
                {section.title && (
                  <Title level={3} className='uppercase !text-[#797a97]'>
                    {section.title}
                  </Title>
                )}

                <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                  {section.links.map((link) => (
                    <PrefetchLink
                      to={link.route}
                      onClick={() => onClose()}
                      className='!text-black hover:!underline'
                      style={{
                        fontWeight: '550',
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
        </div>
      )}
    </Drawer>
  );
};

export default MegaDrawer;
