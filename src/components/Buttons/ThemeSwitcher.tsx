import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { IesButton } from '@/components';
import { useUserStore } from '@/store';

export const ThemeSwitcher = () => {
  const isDark = useUserStore((state) => state.isDark);
  const setIsDark = useUserStore((state) => state.setIsDark);

  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <IesButton
      type='text'
      icon={isDark ? <MoonOutlined /> : <SunOutlined />}
      className='!text-xl'
      onClick={switchTheme}
    />
  );
};
