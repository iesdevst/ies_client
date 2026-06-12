import AimOutlined from '@ant-design/icons/AimOutlined';
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import TeamOutlined from '@ant-design/icons/TeamOutlined';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import type { OvwDetail, OvwScDetail } from '../hooks';
import { Text, Title } from '@/components';

interface IProgOvwProps {
  ovwDt?: OvwDetail | undefined;
  ovwScDt?: OvwScDetail | undefined;
  dark: boolean;
}

const splitTags = (tagName: string) =>
  tagName.split(',').map((s) => s.trim()).filter(Boolean);

const ProgOvw: React.FC<IProgOvwProps> = (props) => {
  const isMb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('progOvw');
  const { ovwDt, ovwScDt, dark } = props;

  const ivDecsTags = useMemo(
    () => (ovwDt ? splitTags(ovwDt.decsTagName) : []),
    [ovwDt],
  );
  const ivTags = useMemo(
    () => (ovwDt ? splitTags(ovwDt.tagName) : []),
    [ovwDt],
  );
  const scDecsTags = useMemo(
    () => (ovwScDt ? splitTags(ovwScDt.decsTagName) : []),
    [ovwScDt],
  );
  const scTags = useMemo(
    () => (ovwScDt ? splitTags(ovwScDt.tagName) : []),
    [ovwScDt],
  );

  const pad = !isMb ? 'px-10 py-7' : 'px-4 py-5';
  const containerCls = `rounded-2xl overflow-hidden divide-y ${dark ? 'bg-[#111827] divide-white/10' : 'bg-white divide-gray-100'}`;
  const romanCls = `text-sm font-bold shrink-0 w-7 pt-0.5 ${dark ? 'text-white/25' : 'text-gray-400'}`;

  return (
    <section>
      {ovwDt && (
        <div className={containerCls}>
          {/* I. Giới thiệu */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>I.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <InfoCircleOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('intro')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwDt.intro}
              </Text>
            </div>
          </div>

          {/* II. Mục tiêu đào tạo */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>II.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <AimOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('trainObj')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwDt.objective}
              </Text>
            </div>
          </div>

          {/* III. Nội dung chương trình */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>III.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <AppstoreOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('trainCt')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwDt.decs}
              </Text>
              {ivDecsTags.length > 0 && (
                <div className='flex flex-wrap gap-2 pt-1'>
                  {ivDecsTags.map((chip) => (
                    <span
                      key={chip}
                      className={`px-3 py-1 rounded-full text-xs ${
                        dark
                          ? 'border border-white/15 text-white/70 bg-white/5'
                          : 'border border-[#E8622A]/20 text-[#E8622A] bg-[#E8622A]/5'
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* IV. Cơ hội nghề nghiệp */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>IV.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#c92cc9]/20' : 'bg-[#E8622A]/10'}`}
                >
                  <TeamOutlined
                    className={`${dark ? 'text-[#ca78ca]!' : 'text-[#E8622A]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('career')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwDt.career}
              </Text>
              {ivTags.length > 0 && (
                <div className='flex flex-wrap gap-2 pt-1'>
                  {ivTags.map((chip) => (
                    <span
                      key={chip}
                      className={`px-3 py-1 rounded-full text-xs ${
                        dark
                          ? 'border border-white/15 text-white/70 bg-white/5'
                          : 'border border-[#E8622A]/20 text-[#E8622A] bg-[#E8622A]/5'
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SC variant — blue theme */}
      {ovwScDt && (
        <div className={containerCls}>
          {/* I. Giới thiệu */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>I.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <InfoCircleOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('intro')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwScDt.intro}
              </Text>
            </div>
          </div>

          {/* II. Mục tiêu đào tạo */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>II.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <AimOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('trainObj')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwScDt.objective}
              </Text>
            </div>
          </div>

          {/* III. Nội dung chương trình */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>III.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <AppstoreOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('trainCt')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwScDt.decs}
              </Text>
              {scDecsTags.length > 0 && (
                <div className='flex flex-wrap gap-2 pt-1'>
                  {scDecsTags.map((chip) => (
                    <span
                      key={chip}
                      className={`px-3 py-1 rounded-full text-xs ${
                        dark
                          ? 'border border-white/15 text-white/70 bg-white/5'
                          : 'border border-[#2B6CB0]/20 text-[#2B6CB0] bg-[#2B6CB0]/5'
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* IV. Cơ hội nghề nghiệp */}
          <div className={`flex gap-4 ${pad}`}>
            <span className={romanCls}>IV.</span>
            <div className='flex-1 space-y-2'>
              <div className='flex items-center gap-2.5'>
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${dark ? 'bg-[#6472cf]/20' : 'bg-[#2B6CB0]/10'}`}
                >
                  <TeamOutlined
                    className={`${dark ? 'text-[#98c3ff]!' : 'text-[#2B6CB0]!'} text-sm!`}
                  />
                </span>
                <Title
                  level={5}
                  className={`${dark ? 'text-white!' : 'text-gray-900!'} m-0! font-semibold!`}
                >
                  {t('career')}
                </Title>
              </div>
              <Text
                color={dark ? 'rgba(255,255,255,0.65)' : '#4b5563'}
                className='text-sm! block! whitespace-pre-line!'
              >
                {ovwScDt.career}
              </Text>
              {scTags.length > 0 && (
                <div className='flex flex-wrap gap-2 pt-1'>
                  {scTags.map((chip) => (
                    <span
                      key={chip}
                      className={`px-3 py-1 rounded-full text-xs ${
                        dark
                          ? 'border border-white/15 text-white/70 bg-white/5'
                          : 'border border-[#2B6CB0]/20 text-[#2B6CB0] bg-[#2B6CB0]/5'
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgOvw;
