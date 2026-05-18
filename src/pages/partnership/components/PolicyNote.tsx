import Col from 'antd/es/col';
import Image from 'antd/es/image';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import PNC from '@/assets/imgs/policy_note_sec.webp';
import { IesClSection, Text, Title } from '@/components';

const PolicyNote: React.FC = () => {
  const mb = useMediaQuery({ maxWidth: 1024 });
  const { t } = useTranslation('policyNote');
  const poliChild = useMemo(
    () => (
      <section className={`${!mb ? 'py-40' : 'py-10'}`}>
        <div
          className={`'
  bg-gradient-to-br 
  from-sky-300 via-blue-400 to-indigo-400 
  rounded-t-[200px] rounded-b-[200px] ${!mb ? 'p-30' : 'pb-30 pt-20 px-6'}`}
        >
          <div>
            <Title className={`${!mb ? '!m-0' : '!text-center'}`}>
              {t('t')}
            </Title>
          </div>

          {!mb ? (
            <>
              <Title className='!m-0 !w-3/4'>{t('d2')}</Title>
            </>
          ) : (
            <Text className='!block !font-bold mt-5'>
              {t('d1')} {t('d2')}
            </Text>
          )}

          <div className={`${!mb ? 'py-20' : 'py-10'}`}>
            <div className='h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent shadow-[0_8px_20px_rgba(59,130,246,0.4)]'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5'>
            <Col>
              <Title level={4} className='!font-bold'>
                {t('s1t')}
              </Title>
              <Text className='!block !text-lg'>{t('s1d')}</Text>
            </Col>
            <Image
              src={PNC}
              preview={false}
              className='!rounded-xl'
              loading='lazy'
              alt='pcn'
            />
            <Col>
              <Title level={4} className=' !font-bold'>
                {t('s2t')}
              </Title>
              <Text className='!block !text-lg'>{t('s2d')}</Text>
            </Col>
          </div>
        </div>
      </section>
    ),
    [t, mb],
  );
  return (
    <IesClSection
      id='policyNote'
      layout='simple'
      divider={false}
      children={poliChild}
      height={mb ? '25vh' : ''}
    />
  );
};

export default PolicyNote;
