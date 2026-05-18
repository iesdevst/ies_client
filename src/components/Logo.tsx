import Image from 'antd/es/image';
import { useMemo } from 'react';
import LogoLoad from '@/assets/imgs/ies_logo_notext.webp';
import LogoLoadMB from '@/assets/imgs/ies_logo_notext_mb.webp';
import { useDevice } from '@/hooks';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}
const Logo = (props: LogoProps) => {
  const { size = 'md', ...restProps } = props || {};
  const { device } = useDevice();

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
      src={device === 'mobile' ? LogoLoadMB : LogoLoad}
      alt='logo'
      className={getWidthFromSize}
      {...restProps}
    />
  );
};

export { Logo };
