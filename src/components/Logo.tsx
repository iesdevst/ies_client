import { Image } from 'antd';
import { useMemo } from 'react';
import LogoLoad from '@/assets/imgs/ies_logo_notext.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}
const Logo = (props: LogoProps) => {
  const { size = 'md', ...restProps } = props || {};

  const getWidthFromSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return '!w-12';
      case 'md':
        return '!w-16';
      case 'lg':
        return '!w-24';
      default:
        return '!w-24';
    }
  }, [size]);

  return (
    <Image
      src={LogoLoad}
      alt='logo'
      loading='lazy'
      className={getWidthFromSize}
      {...restProps}
    />
  );
};

export { Logo };
