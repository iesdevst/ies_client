import { Flex, Image, Layout } from 'antd';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import NavLst from './NavLst';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_notext.png';
import IES_LOGO_URL from '@/assets/imgs/ies_logo_text.png';
import IesClientLang from '@/components/AppDropdown';
import { PrefetchLink } from '@/components/PrefetchLink';
import { ROUTES } from '@/constants';

const { Header } = Layout;

interface IHeaderIes {
  setDrawerKey: (key: string | null) => void;
}

const HeaderIes: React.FC<IHeaderIes> = (props) => {
  const { setDrawerKey } = props;
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <Header
        style={{
          padding: isMobile ? '0px 10px' : '20px 30px',
          height: 30,
          backgroundColor: '#2d334d',
        }}
        className='!flex !items-center !shadow-2xl '
      >
        <MediaQuery minWidth={1025}>
          <div className='!w-full pr-10'>
            <Flex justify='end' align='center' gap={15}>
              <PrefetchLink
                to={ROUTES.ROOT}
                className='!text-white !bg-blue-500 px-3 py-0.5 rounded-sm !text-lg'
              >
                IES
              </PrefetchLink>

              <PrefetchLink to={ROUTES.ROOT} className='!text-white !text-lg'>
                IES staff
              </PrefetchLink>
            </Flex>
          </div>
        </MediaQuery>
      </Header>
      <Header
        style={{
          padding: isMobile ? '0px 10px' : '40px 40px',
          height: 60,
        }}
        className='!flex !items-center !justify-between !bg-white'
      >
        <PrefetchLink
          to={ROUTES.DASHBOARD}
          className='!block !flex !items-center'
        >
          <Image
            className='!w-42 !h-25'
            src={isMobile ? IES_LOGO_MB : IES_LOGO_URL}
            alt='VIETRON Technology Company Limited'
            preview={false}
          />
        </PrefetchLink>
        <MediaQuery minWidth={1025}>
          <NavLst setDrawerKey={setDrawerKey} />
        </MediaQuery>
        <IesClientLang />

        <MediaQuery maxWidth={1024}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              flex: 1,
            }}
          ></div>
        </MediaQuery>
      </Header>
    </>
  );
};

export default HeaderIes;
