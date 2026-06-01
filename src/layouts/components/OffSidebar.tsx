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

const OffSidebar = () => {
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
        mode='inline'
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        className={`!rounded-t-xl !pt-3 ${isDark ? '' : '!bg-gray-500'}`}
        items={dataSidebar.flatMap((group) => [
          {
            type: 'group' as const,
            label: (
              <div className='!border-b'>
                <Title level={3}>{group.tit}</Title>
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
