import { Col } from 'antd';
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

  return (
    <section>
      {tuiApplyDt && (
        <div
          className={`${dark ? '!bg-gray-600' : 'bg-white'} rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
        >
          <div className='space-y-5'>
            <Col className='!space-y-4'>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                I. {t('admissRe')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {tuiApplyDt.requirement}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                II. {t('applyD')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {tuiApplyDt.document}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                III. {t('loca')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {tuiApplyDt.work}
              </Text>
            </Col>
          </div>
        </div>
      )}

      {tuiApplyScDt && (
        <div
          className={`${dark ? '!bg-gray-600' : 'bg-white'} rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
        >
          <div className='space-y-5'>
            <Col className='!space-y-4'>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                I. {t('admissRe')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {tuiApplyScDt.requirement}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                II. {t('applyD')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {tuiApplyScDt.document}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                III. {t('loca')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {tuiApplyScDt.work}
              </Text>
            </Col>
          </div>
        </div>
      )}
    </section>
  );
};

export default TuiApply;
