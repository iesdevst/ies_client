import Layout from 'antd/es/layout';
import Row from 'antd/es/row';
import { lazy } from 'react';
import NavLst from './NavLst';
import IES_LGMB_DARK from '@/assets/imgs/ies_logo_horizo_dark.webp';
import IES_LGMB from '@/assets/imgs/ies_logo_hoziro.webp';
import IES_LG from '@/assets/imgs/logo_head.webp';
import IES_LG_DARK from '@/assets/imgs/logo_head_dark.webp';

import { ThemeSwitcher } from '@/components';
import IesClientLang from '@/components/Buttons/IesClientLang';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES, type RoutePath } from '@/constants';
import { useDevice } from '@/hooks';
import { useUserStore } from '@/store';

const MegaMbDrawer = lazy(() => import('@/layouts/components/MegaMbDrawer'));

const { Header } = Layout;

interface IHeaderIes {
  setDrawerKey: (key: RoutePath | null) => void;
}

const HeaderIes: React.FC<IHeaderIes> = (props) => {
  const { setDrawerKey } = props;
  const { device } = useDevice();
  const { isDark } = useUserStore();

  const showDesktop = device === 'desktop' || device === 'tabletPro';
  const mbtl = device === 'mobile' || device === 'tablet';

  const getIesLogo = () => {
    if (isDark && mbtl) return IES_LGMB_DARK;
    if (isDark) return IES_LG_DARK;
    if (mbtl) return IES_LGMB;
    return IES_LG;
  };

  return (
    <>
      <Header className='!flex !items-center !p-0 !px-4 justify-between'>
        <Row>
          <PrefetchLink
            to={ROUTES.DASHBOARD}
            className='!block !flex !items-center'
          >
            <img
              className={`${showDesktop ? '!w-16 !h-8' : '!w-100 !h-23'} ${device === 'tablet' ? 'ml-45' : ''} mt-2`}
              src={getIesLogo()}
              alt='ies_logo'
              loading='lazy'
              decoding='async'
            />
          </PrefetchLink>
          {showDesktop && (
            <Row className='gap-x-5'>
              <NavLst setDrawerKey={setDrawerKey} />
            </Row>
          )}
        </Row>

        {showDesktop && (
          <Row className='gap-x-5'>
            <IesClientLang colorT={isDark ? '!text-white' : ''} />
            <ThemeSwitcher classN={`${!isDark ? '!text-[#212223]' : ''}`} />
          </Row>
        )}
        {mbtl && <MegaMbDrawer />}
      </Header>
    </>
  );
};

export default HeaderIes;
