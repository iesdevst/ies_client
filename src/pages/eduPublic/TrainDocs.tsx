import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import './viewerPdf.scss';
import { useTranslation } from 'react-i18next';
import { Title } from '@/components';

const TrainDocs = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { t } = useTranslation('trainDocs');

  return (
    <section className='h-screen pt-5 px-10'>
      <Title className='!text-center'>{t('regu')}</Title>
      <div className='mt-10 !h-4/5 overflow-hidden !rounded-3xl'>
        <Worker workerUrl='/pdf.worker.min.js'>
          <Viewer
            fileUrl='/files/train_docs_pub.PDF'
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </section>
  );
};

export default TrainDocs;
