import { CloseOutlined, MenuOutlined, RightOutlined } from '@ant-design/icons';
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
import { useNavigate } from 'react-router-dom';
import { useMegaNavData } from '../hooks';
import styles from '../styles/iesDrawerMb.module.scss';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_hoziro.png';
import MNL from '@/assets/imgs/ies_logo_notext.png';
import { Title } from '@/components';
import IesClientLang from '@/components/AppDropdown';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, type RoutePath } from '@/constants';

const MegaMbDrawer: React.FC = () => {
  const { data } = useMegaNavData();
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
          className={`!m-0 !text-black uppercase ${isAct ? '!text-blue-500' : '!text-black'}`}
        >
          {navI.label}
        </Title>
      ),
      children: (
        <div>
          <Button
            className='!bg-transparent !p-0'
            type='text'
            size='small'
            onClick={() => {
              if (!navI.key) return;
              setMbDrawerOpen(false);
              navigate(navI.key);
            }}
          >
            <Title className='!m-0 !text-black !mr-2' level={5}>
              Overview
            </Title>
            <div className='w-full h-full !bg-blue-500 rounded-r-full flex items-center justify-center px-2'>
              <RightOutlined className='!text-white !font-semibold !text-xs' />
            </div>
          </Button>
          <div className='space-y-8 pt-2 !bg-white'>
            {navI.sections.map((sec, i) => (
              <div key={i}>
                {sec.title && (
                  <Row
                    justify='start'
                    align='middle'
                    className='gap-x-3 !mb-2.5'
                  >
                    <Image src={MNL} preview={false} className='!w-8 !h-8' />

                    <Title level={5} className='uppercase !text-[#797a97] !m-0'>
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
                      className='!text-black hover:!underline'
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
        className='!text-black !font-semibold'
      />

      <Drawer
        placement='right'
        onClose={() => setMbDrawerOpen(false)}
        closable={false}
        open={mbDrawerOpen}
        className={`!bg-white ${styles.mbDrawer}`}
      >
        <div className='px-3 py-2.5'>
          <Flex justify='space-between' align='center'>
            <PrefetchLink
              to={ROUTES.DASHBOARD}
              onClick={() => setMbDrawerOpen(false)}
              className='!block !flex !items-center !pr-28'
            >
              <Image src={IES_LOGO_MB} alt='ies_logo' preview={false} />
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
          <Row justify={'start'} align={'middle'} className='mt-2'>
            <IesClientLang
              buttonProps={{ className: '!p-0 !border-none !bg-transparent' }}
            />
          </Row>
        </div>

        <Flex vertical className='!bg-[#354694]'>
          <Title
            level={5}
            className='!text-center !m-0 !my-3 !text-white !font-bold'
          >
            IES College
          </Title>
          <PrefetchLink
            to={ROUTES.ROOT}
            className='!text-white !bg-blue-500 pl-5 py-1.5 !text-lg'
          >
            IES
          </PrefetchLink>

          <PrefetchLink
            to={ROUTES.ROOT}
            className='!text-white !text-lg pl-5 py-1.5'
          >
            IES Staff
          </PrefetchLink>
        </Flex>

        <Collapse
          items={items}
          accordion
          expandIconPosition='end'
          activeKey={actClKey}
          onChange={(key) => setActClKey(key)}
          className={`!border-none !border-red-500 ${styles.mbMegaCollapse}`}
        />
      </Drawer>
    </>
  );
};

export default MegaMbDrawer;
