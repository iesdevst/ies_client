import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Title } from '@/components';
import { ROUTES } from '@/constants';
import '../styles/iesOffLayout.scss';
import { useUserStore } from '@/store';

const OffSidebar = () => {
  const { isDark } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

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
        items={[
          {
            type: 'group',
            label: (
              <div className='!border-b'>
                <Title level={3} className='!border-blue-500'>
                  Educational Disclosure
                </Title>
              </div>
            ),
            children: [
              {
                key: ROUTES.TRAININGPL,
                label: 'Training Plan',
              },
              {
                key: ROUTES.DEGRESS,
                label: 'Degress',
              },
              {
                key: ROUTES.LEGALDOC,
                label: 'Legal Dossier',
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default OffSidebar;
