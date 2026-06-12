import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { useTranslation } from 'react-i18next';
import { Title } from '@/components';
import './viewerPdf.scss';

const StuRegulation = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { t } = useTranslation('stuRegulation');

  return (
    <section className='flex flex-col h-full pt-5 px-3 sm:px-6 md:px-10'>
      <Title className='text-center! shrink-0'>{t('stuRegu')}</Title>
      <div className='flex-1 min-h-0 mt-3 sm:mt-5 md:mt-10 overflow-hidden rounded-xl! sm:rounded-3xl!'>
        <Worker workerUrl='/pdf.worker.min.js'>
          <Viewer
            fileUrl='/files/student_regulations.pdf'
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </section>
  );
};

export default StuRegulation;
