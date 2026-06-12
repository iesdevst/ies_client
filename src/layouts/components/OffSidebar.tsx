import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from '@/components';
import { ROUTES } from '@/constants';
import '../styles/iesOffLayout.scss';
import {
  useDocsSidebarData,
  usePubSidebarData,
  useStuSidebarData,
} from '@/pages/eduPublic/hooks';
import { useUserStore } from '@/store';

export interface OffSidebarProps {
  onNavigate?: () => void;
}

const OffSidebar: React.FC<OffSidebarProps> = (props) => {
  const { onNavigate } = props;
  const { isDark } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  // sidebar all data

  const { data: pubSide } = usePubSidebarData();
  const { data: docSide } = useDocsSidebarData();
  const { data: stuSide } = useStuSidebarData();

  const SIDEBAR_MAP = {
    [ROUTES.TRAININGPL]: pubSide,
    [ROUTES.DEGRESS]: pubSide,
    [ROUTES.LEGALDOC]: pubSide,
    [ROUTES.QUALITY]: pubSide,
    [ROUTES.VOCATIONAL]: pubSide,

    [ROUTES.TRAINDOCS]: docSide,
    [ROUTES.TRAINFORM]: docSide,

    [ROUTES.REGUSTU]: stuSide,
    [ROUTES.ACTSTU]: stuSide,
    [ROUTES.HANDBOOK]: stuSide,
    [ROUTES.STUFORM]: stuSide,
    [ROUTES.STUINFO]: stuSide,
  };

  const dataSidebar = SIDEBAR_MAP[location.pathname];

  return (
    <div className='h-full off-sidebar'>
      <Menu
        mode='vertical'
        selectedKeys={[location.pathname]}
        onClick={({ key }) => {
          navigate(key);
          onNavigate?.();
        }}
        style={{
          height: '100%',
          borderRight: 0,
          background: isDark
            ? 'linear-gradient(180deg,#1e3a8a 0%,#0f172a 50%,#050505 100%)'
            : 'linear-gradient(135deg, #0EA5C8 0%, #1E4D8C 100%)',
        }}
        className='pt-3!'
        items={dataSidebar.flatMap((group) => [
          {
            type: 'group' as const,
            label: (
              <div className='border-b!'>
                <Title level={3} className='text-white!'>
                  {group.tit}
                </Title>
              </div>
            ),
            children: group.section,
          },
        ])}
      />
    </div>
  );
};

export default OffSidebar;
