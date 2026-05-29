import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Select } from 'antd';
import Flex from 'antd/es/flex';
import { useState } from 'react';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Title } from '@/components';

const pdfList = [
  {
    value: '2025',
    label: 'Kế hoạch đào tạo 2025 - 2026',
    file: '/files/training_plan_2025_2026.pdf',
  },
  {
    value: '2024',
    label: 'Kế hoạch đào tạo 2024 - 2025',
    file: '/files/training_plan_2024_2025.pdf',
  },
];

const TrainingPlan = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [selectedPdf, setSelectedPdf] = useState(pdfList[0]);

  const handleChange = (value: string) => {
    const found = pdfList.find((item) => item.value === value);

    if (found) {
      setSelectedPdf(found);
    }
  };

  return (
    <section className='h-screen pt-5 px-10'>
      <Flex justify='space-between' align='end'>
        <Title className='!text-center !m-0'>{selectedPdf.label}</Title>

        <div>
          <Select
            value={selectedPdf.value}
            onChange={handleChange}
            options={pdfList}
            placeholder='Chọn kế hoạch đào tạo'
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
