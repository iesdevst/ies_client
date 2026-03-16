import { Flex, Image, Layout } from 'antd';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import MegaMbDrawer from './MegaMbDrawer';
import NavLst from './NavLst';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_hoziro.png';
import IES_LOGO_URL from '@/assets/imgs/ies_logo_text.png';
import IesClientLang from '@/components/AppDropdown';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, type RoutePath } from '@/constants';

const { Header } = Layout;

interface IHeaderIes {
  setDrawerKey: (key: RoutePath | null) => void;
}

const HeaderIes: React.FC<IHeaderIes> = (props) => {
  const { setDrawerKey } = props;
  const isMb = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <MediaQuery minWidth={1025}>
        <Header
          style={{
            padding: '20px 30px',
            height: 30,
            backgroundColor: '#2d334d',
          }}
          className='!flex !items-center !shadow-2xl '
        >
          <Flex
            justify='center'
            align='center'
            gap={40}
            className='!w-full !pl-80 '
          >
            <PrefetchLink
              to={ROUTES.ROOT}
              className='!text-white !bg-blue-500 px-3 py-0.5 rounded-sm !text-lg'
            >
              IES College
            </PrefetchLink>
            <PrefetchLink to={ROUTES.ROOT} className='!text-white !text-lg'>
              IES Student
            </PrefetchLink>

            <PrefetchLink to={ROUTES.ROOT} className='!text-white !text-lg'>
              IES College staff
            </PrefetchLink>
            <IesClientLang colorT='!text-white' />
          </Flex>
        </Header>
      </MediaQuery>
      <Header
        style={{
          padding: isMb ? '0px 10px' : '40px 40px',
          height: 60,
        }}
        className='!flex !items-center !justify-center gap-x-60 !bg-white'
      >
        <PrefetchLink
          to={ROUTES.DASHBOARD}
          className='!block !flex !items-center'
        >
          <Image
            className={`${!isMb ? '!w-42 !h-25' : '!w-auto !h-auto !mt-1.5 pr-12'}`}
            src={isMb ? IES_LOGO_MB : IES_LOGO_URL}
            alt='ies_logo'
            preview={false}
          />
        </PrefetchLink>
        <MediaQuery minWidth={1025}>
          <NavLst setDrawerKey={setDrawerKey} />
        </MediaQuery>

        <MediaQuery maxWidth={1024}>
          <MegaMbDrawer />
        </MediaQuery>
      </Header>
    </>
  );
};

export default HeaderIes;
