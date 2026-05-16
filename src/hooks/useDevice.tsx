import { useMediaQuery } from 'react-responsive';

export type DeviceType = 'mobile' | 'tablet' | 'tabletPro' | 'desktop';

export const useDevice = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });

  const tablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 1023,
  });

  const tabletPro = useMediaQuery({
    minWidth: 1024,
    maxWidth: 1365,
  });

  const device: DeviceType = mobile
    ? 'mobile'
    : tablet
      ? 'tablet'
      : tabletPro
        ? 'tabletPro'
        : 'desktop';

  return {
    device,

    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isTabletPro: device === 'tabletPro',
    isDesktop: device === 'desktop',
  };
};
