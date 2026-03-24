import { CaretDownFilled } from '@ant-design/icons';
import { Button, Row, Space } from 'antd';
import { useMegaNavData } from '../hooks';
import type { RoutePath } from '@/constants';

interface INavLst {
  setDrawerKey: (key: RoutePath) => void;
}

const NavLst: React.FC<INavLst> = (props) => {
  const { setDrawerKey } = props;
  const { data } = useMegaNavData();

  return (
    <>
      <div className='bg-[#e7e7e7] rounded-2xl px-5 py-1'>
        <Space size='large' className='!gap-x-7'>
          {data.map((item) => (
            <div>
              <Button
                key={item.key}
                type='text'
                className='!text-[#404040] !text-lg !p-0 mr-1 cursor-pointer'
                onClick={() => setDrawerKey(item.key)}
                style={{ fontWeight: 500 }}
              >
                <Row
                  justify={'space-between'}
                  align={'middle'}
                  className='gap-x-1'
                >
                  <p>{item.label}</p>
                  <CaretDownFilled className='!text-[10px] mt-0.5' />
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
