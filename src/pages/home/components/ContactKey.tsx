import {
  MailFilled,
  PhoneFilled,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { lazy, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useUserStore } from '@/store';

const IesCtModal = lazy(() => import('@/pages/home/components/IesCtModal'));

const ContactKey: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { isDark } = useUserStore();
  const [ctOpen, setCtOpen] = useState(false);
  const { t } = useTranslation('contactKey');

  const textColor = useMemo(
    () => (isDark ? 'text-white' : 'text-black'),
    [isDark],
  );

  const contacts = useMemo(
    () => [
      {
        key: '1',
        title: t('phc'),
        phone: '0901.309.866',
        mail: 'info@iescollege.edu.vn',
      },
      {
        key: '2',
        title: t('ctsv'),
        phone: '0912.584.800',
        mail: 'info@iescollege.edu.vn',
      },
      {
        key: '3',
        title: t('ts'),
        phone: '0901.309.866',
        mail: 'info@iescollege.edu.vn',
      },
    ],
    [t],
  );

  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        className={`mt-20 flex flex-col ${
          !mb ? 'pl-20 pt-20' : 'pt-10 pb-20 px-5'
        }`}
      >
        {/* TITLE */}
        <h2 className={`${textColor} ${mb ? 'text-center' : ''}`}>
          {t('ctKey')}
        </h2>

        {/* ACCORDION (custom instead of antd Collapse) */}
        <div className='border-b border-gray-300 w-full md:w-1/2'>
          {contacts.map((item) => {
            const isOpen = active === item.key;

            return (
              <div key={item.key} className='border-b border-gray-200'>
                {/* HEADER */}
                <button
                  onClick={() => setActive(isOpen ? null : item.key)}
                  className='w-full flex items-center justify-between py-4'
                >
                  <span className={`${textColor} font-semibold`}>
                    {item.title}
                  </span>

                  <PlusOutlined
                    className={`transition-transform ${
                      isOpen ? 'rotate-45 text-red-500' : ''
                    } ${isDark ? 'text-green-400' : 'text-blue-600'}`}
                  />
                </button>

                {/* BODY */}
                {isOpen && (
                  <div className='pb-4 space-y-2'>
                    <div className='flex items-center gap-2'>
                      <span className={textColor}>{t('office')}</span>
                      <span className={isDark ? 'text-white' : ''}>
                        {t('location')}
                      </span>
                    </div>

                    <div className='flex items-center gap-2'>
                      <PhoneFilled className={textColor} />
                      <span className={isDark ? 'text-white' : ''}>
                        {item.phone}
                      </span>
                    </div>

                    <div className='flex items-center gap-2'>
                      <MailFilled className={textColor} />
                      <span className={isDark ? 'text-white' : ''}>
                        {item.mail}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* BUTTON */}
        <div className={`mt-7 ${mb ? 'text-right' : ''}`}>
          <button
            onClick={() => setCtOpen(true)}
            className='flex items-center bg-transparent border-none cursor-pointer'
          >
            <span className={`font-medium ${textColor}`}>
              {t('getAdviceBtn')}
            </span>

            <span className='bg-blue-500 px-3 rounded-r-full flex items-center'>
              <RightOutlined className='text-white' />
            </span>
          </button>
        </div>
      </div>

      {ctOpen && (
        <IesCtModal openCtM={ctOpen} closeCtM={() => setCtOpen(false)} />
      )}
    </>
  );
};

export default ContactKey;
