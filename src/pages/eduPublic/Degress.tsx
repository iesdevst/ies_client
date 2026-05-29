import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import './viewerPdf.scss';
import { Title } from '@/components';

const Degress = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section className='h-screen pt-5'>
      <Title className='!text-center'>Văn bằng - Chứng chỉ</Title>
      <div className='mt-10 !h-4/5 overflow-hidden !rounded-3xl'>
        <Worker workerUrl='/pdf.worker.min.js'>
          <Viewer
            fileUrl='/files/degress_ies.pdf'
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </section>
  );
};

export default Degress;
