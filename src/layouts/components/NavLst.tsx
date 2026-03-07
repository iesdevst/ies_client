import { CaretDownFilled } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useMegaNavData } from '../hooks';

interface INavLst {
  setDrawerKey: (key: string) => void;
}

const NavLst: React.FC<INavLst> = (props) => {
  const { setDrawerKey } = props;
  const navItems = useMegaNavData();

  return (
    <>
      <div className='bg-[#e7e7e7] rounded-2xl px-5 py-1'>
        <Space size='large' className='!gap-x-7'>
          {navItems.map((item) => (
            <div>
              <Button
                key={item.key}
                type='text'
                className='!text-[#404040] !text-lg !p-0 mr-1 cursor-pointer'
                onClick={() => setDrawerKey(item.key)}
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </Button>

              <CaretDownFilled className='!text-[#404040] !text-[10px]' />
            </div>
          ))}
        </Space>
      </div>
    </>
  );
};

export default NavLst;
