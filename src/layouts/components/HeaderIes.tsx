import { Button, Flex, Image, Layout } from 'antd';
import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import NavLst from './NavLst';
import IES_HOZI_DARK_LOGO_URL from '@/assets/imgs/ies_logo_horizo_dark.webp';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_hoziro.webp';
import { ThemeSwitcher, Title } from '@/components';
import IesClientLang from '@/components/Buttons/IesClientLang';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, type RoutePath } from '@/constants';
import { useUserStore } from '@/store';

const MegaMbDrawer = lazy(() => import('@/layouts/components/MegaMbDrawer'));

const { Header } = Layout;

interface IHeaderIes {
  setDrawerKey: (key: RoutePath | null) => void;
}

const HeaderIes: React.FC<IHeaderIes> = (props) => {
  const { setDrawerKey } = props;
  const isMb = useMediaQuery({ maxWidth: 1180 });
  const { isDark } = useUserStore();
  const { t } = useTranslation('headerIes');

  const getIesLogo = () => {
    if (isMb && isDark) return IES_HOZI_DARK_LOGO_URL;
    if (isDark) return IES_HOZI_DARK_LOGO_URL;
    return IES_LOGO_MB;
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
              className=' !bg-blue-500 px-3 py-0.5 rounded-sm '
            >
              <Title level={5} className='!text-white !m-0 !uppercase'>
                {t('iesCl')}
              </Title>
            </PrefetchLink>
            <Button type='text' disabled className='!p-0 !m-0'>
              <PrefetchLink to={ROUTES.ROOT}>
                <Title level={5} className='!text-white !m-0 !uppercase'>
                  {t('iesStu')}
                </Title>
              </PrefetchLink>
            </Button>
            <Button type='text' disabled className='!p-0 !m-0'>
              <PrefetchLink to={ROUTES.ROOT}>
                <Title level={5} className='!text-white !m-0 !uppercase'>
                  {t('iesStaff')}
                </Title>
              </PrefetchLink>
            </Button>
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
        className={`!flex !items-center  ${!isMb ? 'gap-x-45 !justify-center' : '!gap-x-13 !justify-between'} ${isDark ? '!bg-gray-700' : '!bg-white'}`}
      >
        <PrefetchLink
          to={ROUTES.DASHBOARD}
          className='!block !flex !items-center'
        >
          <Image
            className={`${isMb ? '!w-65 !h-full !mt-2' : isDark ? '!w-100 !h-30 !mt-3' : '!w-auto !h-15'}`}
            src={getIesLogo()}
            alt='ies_logo'
            preview={false}
            loading='lazy'
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
