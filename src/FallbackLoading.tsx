import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo, Title, Txt } from './components';
import { useUserStore } from './store';

interface FallbackLoadingProps {
  className?: string;
  showLogo?: boolean;
}

const FallbackLoading: React.FC<FallbackLoadingProps> = (props) => {
  // const { height } = useWindowSize();
  const { className, showLogo = true } = props || {};
  const [dots, setDots] = useState('');
  const { isDark } = useUserStore();
  const { t } = useTranslation('fallbackLoading');

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const baseClasses = 'flex items-center justify-center h-screen';

  return (
    <div
      className={className || baseClasses}
      style={{
        // backgroundImage: `url(${fallBackBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='relative z-10  items-center w-65'>
        {/* Glass-morphism container */}
        <div
          className='relative p-5 rounded-3xl backdrop-blur-xl shadow-2xl w-full '
          style={{
            background: isDark ? '#618fd1' : 'rgba(255, 255, 255, 0.6)',
          }}
        >
          <div className='relative text-center'>
            {/* Logo */}
            {showLogo && <Logo size='md' />}

            <Title
              className={`${isDark ? '!text-white' : '!text-blue-400'} !m-0 !mt-3 italic`}
              level={3}
            >
              {t('load')}
            </Title>
            <div>
              <Txt style={{ color: '#005cdf', fontSize: '70px' }}>{dots}</Txt>
            </div>
          </div>
        </div>

        {/* Enhanced Floating particles */}
        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float opacity-30`}
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                background:
                  i % 3 === 0
                    ? 'rgba(59, 130, 246, 0.6)'
                    : i % 3 === 1
                      ? 'rgba(147, 51, 234, 0.6)'
                      : 'rgba(6, 182, 212, 0.6)',
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + (i % 2)}s`,
                filter: 'blur(0.5px)',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FallbackLoading;
