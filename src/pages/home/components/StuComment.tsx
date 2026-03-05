import { Col, Flex, Image } from 'antd';
import STUC from '@/assets/imgs/stu_cm.jpg';
import { IesClSection } from '@/components';

const StuComment = () => {
  return (
    <IesClSection
      id='stuCm'
      layout='simple'
      divider={false}
      children={
        <Flex justify='space-between' align='end'>
          <div className='flex-1'>
            <Image src={STUC} preview={false} className='!h-50' />
          </div>
          <div className='flex-1'>
            <Col className='pl-47'>
              <p className='!text-white'>
                After returning from the United States, I decided to study
                Events Management at Van Lang University, specifically the
                International Education Institute. We have many opportunities to
                practice - apply to practice in a very professional learning
                environment. Moreover, my teachers eagerly support me not only
                in terms of professional knowledge but also in terms of life
                knowledge in order to help me grow every day. I also had the
                chance to participate in extracurricular activities, workshops,
                and other fun activities with my friends. I came here and made
                true friends; we learned together, grew together, and faced
                challenges together. In my youth, I am proud to say the
                International Education Institute was the right choice.
              </p>
              <p>Liam Ngo</p>
              <p>Student</p>
            </Col>
          </div>
        </Flex>
      }
      className='bg-[#090a20] mt-20 !min-h-[60vh]'
    />
  );
};

export default StuComment;
