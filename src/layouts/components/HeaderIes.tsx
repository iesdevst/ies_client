import { Image, Layout, Space } from 'antd';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import IES_LOGO_MB from '@/assets/imgs/ies_logo_notext.png';
import IES_LOGO_URL from '@/assets/imgs/ies_logo_text.png';
import IesClientLang from '@/components/AppDropdown/IesClientLang';

const ManualLink = ({ ...props }: LinkProps & { isActive?: boolean }) => {
  const { isActive = false, ...linkProps } = props || {};

  return (
    <Link
      style={{
        color: isActive ? 'purple' : 'black',
        textDecoration: isActive ? 'underline' : 'none',
        fontSize: 18,
      }}
      {...linkProps}
    />
  );
};

const { Header } = Layout;

const HeaderIes = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <>
      <Header
        style={{
          padding: isMobile ? '0px 10px' : '0px 30px',
          height: 30,
          backgroundColor: '#2d334d',
        }}
        className='!flex !items-center !shadow-2xl '
      >
        <MediaQuery minWidth={1025}>
          <Space size='large' className='!gap-x-4'>
            <ManualLink to={`/`} className='!text-white'>
              IES
            </ManualLink>

            <ManualLink to={`/`} className='!text-white'>
              IES staff
            </ManualLink>
          </Space>
        </MediaQuery>
      </Header>
      <Header
        style={{
          padding: isMobile ? '0px 10px' : '0px 30px',
          height: 60,
          borderBottom: '1px solid #adc0e3',
        }}
        className='!flex !items-center !justify-between !shadow-2xl'
      >
        <Link to='/' className='!block !flex !items-center'>
          <Image
            className='!w-20 !h-20'
            src={isMobile ? IES_LOGO_MB : IES_LOGO_URL}
            alt='VIETRON Technology Company Limited'
            preview={false}
          />
        </Link>
        <MediaQuery minWidth={1025}>
          <Space size='large' className='!gap-x-4'>
            <ManualLink to={`/`}>Home</ManualLink>

            <ManualLink to={`/`}>About</ManualLink>

            <ManualLink to={`/`}>Academics</ManualLink>
            <ManualLink to={`/`}>Admissions</ManualLink>
            <ManualLink to={`/`}>Careers</ManualLink>
            <ManualLink to={`/`}>IES news</ManualLink>
            <ManualLink to={`/`}>Training Partnerships</ManualLink>
            <ManualLink to={`/`}>VE Disclosure</ManualLink>

            <IesClientLang />
          </Space>
        </MediaQuery>

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
