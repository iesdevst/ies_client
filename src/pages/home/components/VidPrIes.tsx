import { IesClSection } from '@/components';

const VidPrIes: React.FC = () => {
  return (
    <IesClSection
      id='vidPr'
      layout='vidPr'
      bottomTit='Know more about us'
      desVid='At Van Lang, we are focused on not just providing knowledge and skills that could birth a fulfilling future career, but also on nurturing an effective research mindset that recognizes potential in all things and can transform every small step into a launching ground for impactful innovations.'
      titVid={`A launching ground for inspirational
impacts`}
      vidLink='https://www.youtube.com/embed/8G1vC-hJjjc?si=Q_cV53WSlXUtmrA7'
      className='h-full'
    />
  );
};

export default VidPrIes;
