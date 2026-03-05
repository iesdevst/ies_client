import { Col, Image } from 'antd';
import ICL from '@/assets/imgs/intern_cl.png';
import { IesClSection, Title } from '@/components';

const InternCollab: React.FC = () => {
  return (
    <IesClSection
      id='internColl'
      layout='systemCardSplit'
      children={
        <Col className='pl-47'>
          <Title level={2} className='!font-bold w-5/6 !mb-9'>
            Internship Partnerships: A Bridge to Career Opportunities
          </Title>

          <div
            className="
    relative 
    
    before:content-[''] 
    before:absolute 
    before:top-27
    before:right-[-52px]
    before:w-1/8
    before:h-[130%]
    before:bg-[#febd25] 
    before:z-10
  "
          >
            <div
              className="
    relative 
    before:content-[''] 
    before:absolute 
    before:top-45
   before:right-[-104px]
     before:w-1/8
    before:h-2/3
    before:bg-[#febd25] 
    before:z-10
  "
            >
              <p className='!w-5/6'>
                IES always focuses on developing internship partnerships with
                businesses to provide students with opportunities to experience
                real working environments. Through these programs, students can
                apply the knowledge they have learned, gain practical
                experience, and enhance their employment opportunities after
                graduation.
              </p>
            </div>
          </div>

          <div className='relative w-1/3 mt-10'>
            <div className='bg-blue-600 text-white px-5 py-2 font-semibold text-sm'>
              Explore our activities
            </div>
            <div className='absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#febd25] rotate-45'></div>
          </div>
        </Col>
      }
      splitFeat={<Image src={ICL} preview={false} className='!h-100' />}
      className='bg-[#febd25] mt-20 !min-h-[60vh]'
    />
  );
};

export default InternCollab;
