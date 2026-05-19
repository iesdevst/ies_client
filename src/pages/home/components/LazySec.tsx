import { useEffect, useRef, useState } from 'react';

interface ILazySec {
  Component: React.ComponentType;
}

const LazySec: React.FC<ILazySec> = ({ Component }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '800px',
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref}>{visible ? <Component /> : null}</div>;
};

export default LazySec;
