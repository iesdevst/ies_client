import Col from 'antd/es/col';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import type { OvwDetail, OvwScDetail } from '../hooks';
import { Text, Title } from '@/components';

interface IProgOvwProps {
  ovwDt?: OvwDetail | undefined;
  ovwScDt?: OvwScDetail | undefined;
  dark: boolean;
}

const ProgOvw: React.FC<IProgOvwProps> = (props) => {
  const isMb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('progOvw');
  const { ovwDt, ovwScDt, dark } = props;

  return (
    <section>
      {ovwDt && (
        <div
          className={`${dark ? '!bg-gray-600' : '!bg-white'} rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
        >
          <div className='space-y-5'>
            <Col className='!space-y-4'>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                I. {t('intro')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwDt.intro}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                II. {t('trainObj')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwDt.objective}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                III. {t('trainObj')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwDt.decs}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#ca78ca]' : ' !text-[#BE3691]'}`}
                level={3}
              >
                IV. {t('career')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwDt.career}
              </Text>
            </Col>
          </div>
        </div>
      )}

      {ovwScDt && (
        <div
          className={`${dark ? '!bg-gray-600' : '!bg-white'} rounded-2xl ${!isMb ? 'p-10' : 'pb-10 pt-5 px-3.5'}`}
        >
          <div className='space-y-5'>
            <Col className='!space-y-4'>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                I. {t('intro')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwScDt.intro}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                II. {t('trainObj')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwScDt.objective}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                III. {t('trainCt')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwScDt.decs}
              </Text>
            </Col>
            <Col>
              <Title
                className={`!m-0 ${dark ? '!text-[#98c3ff]' : ' !text-[#6472cf]'}`}
                level={3}
              >
                IV. {t('career')}
              </Title>
              <Text
                color={dark ? 'white' : ''}
                style={{
                  whiteSpace: 'pre-line',
                }}
                className='!text-md !font-semibold !mt-2 !block'
              >
                {ovwScDt.career}
              </Text>
            </Col>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProgOvw;
