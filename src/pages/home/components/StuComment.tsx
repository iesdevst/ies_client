import { Col, Flex, Image } from 'antd';
import STUC from '@/assets/imgs/stu_cm.jpg';
import STBG from '@/assets/imgs/stu_cmt_bg.png';
import { IesClSection } from '@/components';

const StuComment = () => {
  return (
    <IesClSection
      id='stuCm'
      layout='simple'
      divider={false}
      children={
        <div className='relative w-full h-full'>
          <div className='absolute inset-0 bg-[#090a20]/90'></div>
          <Flex
            justify='space-between'
            align='flex-start'
            className='!pt-23 !px-25 !py-25'
          >
            <div className='flex-1 flex justify-end'>
              <Image
                src={STUC}
                preview={false}
                className='!h-[450px] !w-[380px] object-cover !rounded-b-[200px]'
                style={{
                  clipPath: 'ellipse(75% 60% at 50% 40%)',
                }}
              />
            </div>
            <div className='flex-2'>
              <Col className='pl-15 mt-15 !space-y-5'>
                <p className='!text-[#e0e1e2] !text-[24px] pr-7'>
                  After returning from the United States, I decided to study
                  Events Management at Van Lang University, specifically the
                  International Education Institute. We have many opportunities
                  to practice - apply to practice in a very professional
                  learning environment. Moreover, my teachers eagerly support me
                  not only in terms of professional knowledge but also in terms
                  of life knowledge in order to help me grow every day. I also
                  had the chance to participate in extracurricular activities,
                  workshops, and other fun activities with my friends. I came
                  here and made true friends; we learned together, grew
                  together, and faced challenges together. In my youth, I am
                  proud to say the International Education Institute was the
                  right choice.
                </p>
                <div className='space-y-1'>
                  <p className='!text-white !font-bold text-xl'>Liam Ngo</p>
                  <p className='text-[#a5a7b9] text-lg'>Student</p>
                </div>
              </Col>
            </div>
          </Flex>
        </div>
      }
      className='!min-h-[60vh]'
      style={{
        backgroundImage: `url(${STBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    />
  );
};

export default StuComment;
