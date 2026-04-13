import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { IesButton } from '@/components';
import { useUserStore } from '@/store';

interface IThemeSwitcher {
  classN?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcher> = (props) => {
  const { classN } = props;
  const isDark = useUserStore((state) => state.isDark);
  const setIsDark = useUserStore((state) => state.setIsDark);

  const switchTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <IesButton
      type='text'
      icon={isDark ? <MoonOutlined /> : <SunOutlined />}
      className={`!text-xl ${classN}`}
      onClick={switchTheme}
    />
  );
};
