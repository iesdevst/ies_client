import { Flex, Image } from 'antd';
import type { NaiPageLayoutProps } from '../types';
import { Text, Title } from '@/components/AntTypography';

const NaiPage: React.FC<NaiPageLayoutProps> = (props) => {
  const {
    newsTit,
    decs,
    img,
    linkTo,
    mb,
    nOe,
    readOri,
    paddingClass,
    titleLv,
    tl,
  } = props;

  return (
    <section>
      <div className='!rounded-4xl !bg-[#dfe0e2] pt-10 pb-20 mx-5'>
        <Title
          level={mb || tl ? 3 : 5}
          className='!text-center italic !text-black'
        >
          {nOe}
        </Title>
        {/* // CONTENT */}
        <Flex
          vertical
          justify='center'
          align='center'
          className={paddingClass}
          gap={40}
        >
          <Title level={titleLv} className='!text-center !text-black'>
            {newsTit}
          </Title>

          <Image src={img} preview={false} alt='news1' loading='lazy' />

          <Text className='!block !text-lg' style={{ whiteSpace: 'pre-line' }}>
            {decs}
          </Text>

          {linkTo && (
            <a href={linkTo} target='blank' rel='noopener noreferrer'>
              <Text color='blue' className='!underline !text-lg'>
                {readOri}
              </Text>
            </a>
          )}
        </Flex>
      </div>
    </section>
  );
};

export default NaiPage;
