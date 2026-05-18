import CiCircleFilled from '@ant-design/icons/es/icons/CiCircleFilled';
import Flex from 'antd/es/flex';
import List from 'antd/es/list';
import { Text, Title } from '@/components';

interface IDetaisBouns {
  dark: boolean;
}

const DetailsBonus: React.FC<IDetaisBouns> = (props) => {
  const { dark } = props;
  return (
    <Flex vertical>
      <Title level={5} className='underline !text-blue-500'>
        Có thể bạn quan tâm
      </Title>
      <div className='space-y-5'>
        <div>
          <Title level={4} className='uppercase'>
            Thông tin liên hệ
          </Title>
          <Text color={dark ? 'white' : 'black'} className='!block !text-lg'>
            Để học sinh và phụ huynh có thêm cơ hội trải nghiệm thực tế, tham
            quan môi trường học tập và được tư vấn hướng nghiệp trực tiếp,
            Trường Trung Cấp Tin Học Kinh Tế Sài Gòn mở cửa đón tiếp từ thứ Hai
            đến thứ Sáu, 07g30 đến 17g00 tại Cơ sở chính: 98 Phạm Văn Chiêu,
            Phường Thông Tây Hội , TP. Hồ Chí Minh.
          </Text>
          <Text color={dark ? 'white' : 'black'} className='!block !text-lg'>
            Thí sinh và phụ huynh có thể đăng ký trải nghiệm và tư vấn qua:
            <a
              href='https://www.ies.edu.vn/demics-detail/infoTech?tab=register'
              target='blank'
              rel='noopener noreferrer'
            >
              <Text
                color={dark ? '#b1e0f7' : 'blue'}
                className='!underline !text-lg !ml-1'
              >
                https://www.ies.edu.vn/demics-detail/infoTech?tab=register
              </Text>
            </a>
          </Text>
        </div>
        <div>
          <Title level={4} className='uppercase'>
            Phòng tuyển sinh Trường Trung Cấp Tin Học Kinh Tế Sài Gòn
          </Title>
          <List
            dataSource={[
              <Text>
                <Text
                  color={dark ? 'white' : 'black'}
                  className='!font-bold !text-lg'
                >
                  Cơ sở chính:
                </Text>
                <Text
                  color={dark ? 'white' : 'black'}
                  className='ml-1 !text-lg'
                >
                  98 Phạm Văn Chiêu, Phường Thông Tây Hội , TP. Hồ Chí Minh
                </Text>
              </Text>,
              <Text>
                <Text
                  color={dark ? 'white' : 'black'}
                  className='!font-bold !text-lg'
                >
                  Hotline:
                </Text>
                <a
                  href='tel:0901309866'
                  className={`${dark ? '!text-[#b1e0f7]' : ''} !text-lg !ml-1`}
                >
                  0901.309.866
                </a>
              </Text>,
              <Text>
                <Text
                  color={dark ? 'white' : 'black'}
                  className='!font-bold !text-lg'
                >
                  Zalo:
                </Text>
                <a
                  href='https://zalo.me/0901309866'
                  target='_blank'
                  className={`${dark ? '!text-[#b1e0f7]' : ''} !text-lg !ml-1`}
                >
                  Trường Trung Cấp Tin Học Kinh Tế Sài Gòn
                </a>
              </Text>,
              <Text>
                <Text
                  color={dark ? 'white' : 'black'}
                  className='!font-bold !text-lg'
                >
                  Fanpage:
                </Text>
                <a
                  href='https://www.facebook.com/iescollege.edu.vn'
                  target='_blank'
                  className={`${dark ? '!text-[#b1e0f7]' : ''} !text-lg !ml-1`}
                >
                  IES College
                </a>
              </Text>,
            ]}
            renderItem={(item) => (
              <div className='flex !items-center'>
                <CiCircleFilled className='mr-2 text-[10px]' />
                <List.Item className='!border-none !px-0 !py-1'>
                  {item}
                </List.Item>
              </div>
            )}
          />
        </div>
      </div>
    </Flex>
  );
};

export default DetailsBonus;
