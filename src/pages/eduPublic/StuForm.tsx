import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Select } from 'antd';
import Flex from 'antd/es/flex';
import { useMemo, useState } from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { useTranslation } from 'react-i18next';
import { Title } from '@/components';
import './viewerPdf.scss';

const StuForm = () => {
  const { t } = useTranslation('stuForm');

  const pdfList = useMemo(
    () => [
      {
        id: '1',
        label: t('adP'),
        file: '/files/admission_procedures.pdf',
      },
      {
        id: '2',
        label: t('resume'),
        file: '/files/resume.pdf',
      },
      {
        id: '3',
        label: t('appForm'),
        file: '/files/apply_form.pdf',
      },
      {
        id: '4',
        label: t('reqForm'),
        file: '/files/request_form.pdf',
      },
    ],
    [t],
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [selectedId, setSelectedId] = useState<string>('1');

  const selectedPdf = useMemo(() => {
    return pdfList.find((item) => item.id === selectedId) ?? pdfList[0];
  }, [selectedId, pdfList]);

  return (
    <section className='flex flex-col h-full py-5 px-3 sm:px-6 md:px-10'>
      <Flex
        justify='space-between'
        align='center'
        wrap
        gap={8}
        className='shrink-0'
      >
        <Title className='m-0!'>{selectedPdf.label}</Title>
        <Select
          value={selectedId}
          onChange={setSelectedId}
          className='w-full sm:w-64!'
          options={pdfList.map((item) => ({
            value: item.id,
            label: item.label,
          }))}
        />
      </Flex>
      <div className='flex-1 min-h-0 mt-3 sm:mt-4 md:mt-6 overflow-hidden rounded-xl! sm:rounded-3xl!'>
        <Worker workerUrl='/pdf.worker.min.js'>
          <Viewer
            fileUrl={selectedPdf.file}
            plugins={[defaultLayoutPluginInstance]}
          />
        </Worker>
      </div>
    </section>
  );
};

export default StuForm;
