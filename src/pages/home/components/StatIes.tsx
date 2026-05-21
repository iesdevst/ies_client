import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { IesClSection } from '@/components';
gsap.registerPlugin(ScrollTrigger);
const cards = [
  { title: '200+', desc: 'Projects delivered' },
  { title: '40%', desc: 'Efficiency gained' },
  { title: '15+', desc: 'Years experience' },
];
const StatIes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.stat-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 1700, opacity: 0 },
          {
            y: -80 * index,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.3,
              pinSpacing: true,
            },
          },
        );
        gsap.fromTo(
          '.stats-title',
          { y: 1700, opacity: 0 },
          {
            y: -60,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'center center',
              pinSpacing: true,
              scrub: 1.3,
            },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <IesClSection
      id='staties'
      layout='simple'
      divider={false}
      ref={sectionRef}
      className='relative'
      height='h-[220vh]'
    >
      {/* sticky area */}
      <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
        <div className='mx-auto w-full max-w-6xl px-6'>
          <div className='mb-40'>
            <p className='mb-4 text-sm uppercase tracking-[0.2em] text-white/50'>
              Results
            </p>
            <h2 className='max-w-3xl text-5xl font-semibold leading-tight text-white'>
              Excellent results for our clients
            </h2>
          </div>
          <div className=' stats-grid grid grid-cols-1 gap-6 md:grid-cols-3 '>
            {cards.map((card, index) => (
              <div
                key={index}
                className=' stat-card rounded-[32px] border border-white/10 bg-white/[0.04] p-10 shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md will-change-transform '
              >
                <p className='mb-8 text-sm leading-7 text-white/60'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <h3 className='text-6xl font-bold text-white'>{card.title}</h3>
                <p className='mt-4 text-white/50'>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IesClSection>
  );
};
export default StatIes;
