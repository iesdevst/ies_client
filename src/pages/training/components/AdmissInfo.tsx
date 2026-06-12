import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import SendOutlined from '@ant-design/icons/SendOutlined';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import type { AdmissInfo, AdmissScInfo } from '../hooks';
import { Text, Title } from '@/components';

interface IAdmissInfoProps {
  admisInfoDt?: AdmissInfo | undefined;
  admisScInfoDt?: AdmissScInfo | undefined;
  dark: boolean;
}

const AdmissInfo: React.FC<IAdmissInfoProps> = (props) => {
  const { admisInfoDt, admisScInfoDt, dark } = props;
  const { t } = useTranslation('admissInfo');
  const isMb = useMediaQuery({ maxWidth: 1024 });

  const pad = !isMb ? 'px-10 py-7' : 'px-4 py-5';
  const containerCls = `rounded-2xl overflow-hidden divide-y ${dark ? 'bg-[#111827] divide-white/10' : 'bg-white divide-gray-100'}`;
  const romanCls = `text-sm font-bold shrink-0 w-7 pt-0.5 ${dark ? 'text-white/25' : 'text-gray-400'}`;

  return (
    <section>
      {admisInfoDt && (
        <div className={containerCls}>
          {/* I. Điều kiện tuyển sinh */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>I.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <CheckCircleOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('admissRe')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {admisInfoDt.require}
              </Text>
            </div>
          </div>

          {/* II. Phương thức tuyển sinh */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>II.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <SendOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('admissMt')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {admisInfoDt.method}
              </Text>
            </div>
          </div>
        </div>
      )}

      {/* SC variant — blue theme */}
      {admisScInfoDt && (
        <div className={containerCls}>
          {/* I. Điều kiện tuyển sinh */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>I.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <CheckCircleOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('admissRe')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {admisScInfoDt.require}
              </Text>
            </div>
          </div>

          {/* II. Phương thức tuyển sinh */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>II.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <SendOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('admissMt')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {admisScInfoDt.method}
              </Text>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdmissInfo;
