import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Select } from 'antd';
import Flex from 'antd/es/flex';
import { useMemo, useState } from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { useTranslation } from 'react-i18next';
import { Title } from '@/components';

const TrainingPlan = () => {
  const { t } = useTranslation('trainingPlan');

  const pdfList = useMemo(
    () => [
      {
        id: '1',
        label: t('label1'),
        file: '/files/training_plan_2025_2026.pdf',
      },
      {
        id: '2',
        label: t('label2'),
        file: '/files/training_plan_2024_2025.pdf',
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
    <section className='h-screen pt-5 px-10'>
      <Flex justify='space-between' align='end'>
        <Title className='!text-center !m-0'>{selectedPdf.label}</Title>

        <div>
          <Select
            value={selectedId}
            onChange={setSelectedId}
            options={pdfList.map((item) => ({
              value: item.id,
              label: item.label,
            }))}
          />
        </div>
      </Flex>
      <div className='mt-10 !h-4/5 overflow-hidden !rounded-3xl'>
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

export default TrainingPlan;
