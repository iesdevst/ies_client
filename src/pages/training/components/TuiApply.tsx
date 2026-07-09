import EnvironmentOutlined from '@ant-design/icons/EnvironmentOutlined';
import FileOutlined from '@ant-design/icons/FileOutlined';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import type { ScTuiApply, TuiApply } from '../hooks';
import { Text, Title } from '@/components';

interface ITuiApplyProps {
  tuiApplyDt?: TuiApply | undefined;
  tuiApplyScDt?: ScTuiApply | undefined;
  dark: boolean;
}

const TuiApply: React.FC<ITuiApplyProps> = (props) => {
  const { tuiApplyDt, tuiApplyScDt, dark } = props;
  const isMb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('tuiApply');

  const pad = !isMb ? 'px-10 py-7' : 'px-4 py-5';
  const containerCls = `rounded-2xl overflow-hidden divide-y ${dark ? 'bg-[#111827] divide-white/10' : 'bg-white divide-gray-100'}`;
  const romanCls = `text-sm font-bold shrink-0 w-7 pt-0.5 ${dark ? 'text-white/25' : 'text-gray-400'}`;

  return (
    <section>
      {tuiApplyDt && (
        <div className={containerCls}>
          {/* I. Điều kiện tuyển sinh */}

          {/* II. Hồ sơ đăng ký */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>I.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <FileOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('applyD')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-lg! block! whitespace-pre-line!'
              >
                {tuiApplyDt.document}
              </Text>
            </div>
          </div>

          {/* III. Địa điểm và thời gian */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>II.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <FileOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('loca')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-lg! block! whitespace-pre-line!'
              >
                {tuiApplyDt.work}
              </Text>
            </div>
          </div>
        </div>
      )}

      {/* SC variant — blue theme */}
      {tuiApplyScDt && (
        <div className={containerCls}>
          {/* I. Điều kiện tuyển sinh */}

          {/* II. Hồ sơ đăng ký */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>I.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <FileOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('applyD')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-lg! block! whitespace-pre-line!'
              >
                {tuiApplyScDt.document}
              </Text>
            </div>
          </div>

          {/* III. Địa điểm và thời gian */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>II.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <EnvironmentOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('loca')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-lg! block! whitespace-pre-line!'
              >
                {tuiApplyScDt.work}
              </Text>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TuiApply;
