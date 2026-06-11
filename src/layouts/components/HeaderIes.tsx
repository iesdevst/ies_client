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
  const tl = device === 'tablet';
  const mb = device === 'mobile';
  const tlpr = device === 'tabletPro';

  const getIesLogo = () => {
    if (isDark && mbtl) return IES_LGMB_DARK;
    if (isDark) return IES_LG_DARK;
    if (mbtl) return IES_LGMB;
    return IES_LG;
  };

  return (
    <>
      {showDesktop && (
        <div
          className={`!w-full px-20 py-1 ${isDark ? 'bg-[#2b2f6b]' : 'bg-gray-500'}`}
        >
          <Row className='gap-x-7' justify={'end'}>
            <ThemeSwitcher classN='!text-white' />
            <IesClientLang colorT='!text-white' />
          </Row>
        </div>
      )}
      <Header
        className={`${mb ? 'mt-3 !justify-between' : tl ? 'mt-3 !justify-between pr-5!' : tlpr ? '!justify-between' : 'gap-x-50 !justify-center !px-4 my-1.5'} !flex !items-center !p-0`}
      >
        <PrefetchLink
          to={ROUTES.DASHBOARD}
          className='!block !flex !items-center'
        >
          <img
            className={`${showDesktop ? '!w-25 !h-10' : '!w-100 !h-23'} ${tl ? 'ml-45 mb-1!' : mb ? 'mb-1!' : ''}`}
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

        {mbtl && <MegaMbDrawer />}
      </Header>
    </>
  );
};

export default HeaderIes;
