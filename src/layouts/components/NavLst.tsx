import { CaretDownFilled } from '@ant-design/icons';
import { Button, Row, Space } from 'antd';
import { useMegaNavData } from '../hooks';
import { Title } from '@/components';
import type { RoutePath } from '@/constants';
import { useUserStore } from '@/store';

interface INavLst {
  setDrawerKey: (key: RoutePath) => void;
}

const NavLst: React.FC<INavLst> = (props) => {
  const { setDrawerKey } = props;
  const { data } = useMegaNavData();
  const { isDark } = useUserStore();

  return (
    <>
      <div
        className={`${isDark ? '!bg-[#294a86]' : 'bg-[#e7e7e7]'} rounded-2xl px-5 py-1`}
      >
        <Space size='large' className='!gap-x-7'>
          {data.map((item) => (
            <div>
              <Button
                key={item.key}
                type='text'
                className='!p-0 mr-1 cursor-pointer'
                onClick={() => setDrawerKey(item.key)}
                style={{ fontWeight: 500 }}
              >
                <Row
                  justify={'space-between'}
                  align={'middle'}
                  className='gap-x-1'
                >
                  <Title
                    level={5}
                    className={`${isDark ? 'white' : '#404040'} !m-0 !uppercase`}
                  >
                    {item.label}
                  </Title>
                  <CaretDownFilled
                    className={`${isDark ? '!text-white' : '!text-[#404040]'} !text-[10px] mt-0.5`}
                  />
                </Row>
              </Button>
            </div>
          ))}
        </Space>
      </div>
    </>
  );
};

export default NavLst;
