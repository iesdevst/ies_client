import { Flex, Image, Layout } from 'antd';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import MegaMbDrawer from './MegaMbDrawer';
import NavLst from './NavLst';
import IES_DARK_LOGO_URL from '@/assets/imgs/ies_logo_dark.png';
import IES_HOZI_DARK_LOGO_URL from '@/assets/imgs/ies_logo_horizo_dark.png';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_hoziro.png';
import IES_LOGO_URL from '@/assets/imgs/ies_logo_text.png';
import { ThemeSwitcher } from '@/components';
import IesClientLang from '@/components/Buttons/IesClientLang';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, type RoutePath } from '@/constants';
import { useUserStore } from '@/store';

const { Header } = Layout;

interface IHeaderIes {
  setDrawerKey: (key: RoutePath | null) => void;
}

const HeaderIes: React.FC<IHeaderIes> = (props) => {
  const { setDrawerKey } = props;
  const isMb = useMediaQuery({ maxWidth: 1180 });
  const { isDark } = useUserStore();

  const getIesLogo = () => {
    if (isMb && isDark) return IES_HOZI_DARK_LOGO_URL;
    if (isMb) return IES_LOGO_MB;
    if (isDark) return IES_DARK_LOGO_URL;
    return IES_LOGO_URL;
  };

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
              IES College Staff
            </PrefetchLink>
            <IesClientLang colorT='!text-white' />
            <ThemeSwitcher />
          </Flex>
        </Header>
      </MediaQuery>
      <Header
        style={{
          padding: isMb ? '0 40px 0 40px' : '55px 40px',
          height: !isMb ? 60 : 80,
        }}
        className={`!flex !items-center  ${!isMb ? 'gap-x-60 !justify-center' : '!gap-x-13 !justify-between'} ${isDark ? '!bg-gray-700' : '!bg-white'}`}
      >
        <PrefetchLink
          to={ROUTES.DASHBOARD}
          className='!block !flex !items-center'
        >
          <Image
            className={`${!isMb ? '!w-42 !h-25' : '!w-65 !h-full !mt-2'}`}
            src={getIesLogo()}
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
