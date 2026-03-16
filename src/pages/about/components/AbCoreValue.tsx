import { Button, Flex } from 'antd';
import { Title } from '@/components';

const AbCoreValue = () => {
  return (
    <div className='px-20 !bg-[#4B1B1B]'>
      <Flex className='border-b pb-10' justify='space-between' align='center'>
        <Title className='!text-[#EEB585] !m-0'>Values of Our Team</Title>

        <div>
          <Button type='default' className='!bg-[#EEB585] !text-black'>
            Contact Us for Details
          </Button>
        </div>
      </Flex>
    </div>
  );
};

export default AbCoreValue;
