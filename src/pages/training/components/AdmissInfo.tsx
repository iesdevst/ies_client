import Col from 'antd/es/col';
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

  return (
    <section>
      {admisInfoDt && (
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
                {admisInfoDt.require}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                II. {t('admissMt')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {admisInfoDt.method}
              </Text>
            </Col>
          </div>
        </div>
      )}

      {admisScInfoDt && (
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
                {admisScInfoDt.require}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                II. {t('admissMt')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {admisScInfoDt.method}
              </Text>
            </Col>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdmissInfo;
